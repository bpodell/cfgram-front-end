import React from 'react'
import Content from './content/content'
import Landing from './landing/landing'
import {Provider} from 'react-redux'
import createStore from '../lib/app-create-store'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import ProfileForm from './settings/settings';
import Navbar from './navbar/navbar'
const store = createStore()

export default class App extends React.Component {
  componentWillMount() {
    if(localStorage.token)
      store.dispatch({type: 'TOKEN_SET', payload: localStorage.token})
  }


  render() {
    let {token} = store.getState()

    return (
      <main className="application">
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Navbar token={token}/>
              <Route exact path="/welcome/:auth" component={Landing}/>
              <Route exact path="/content" component={() =>
                token
                ? <Content token={token}/>
                : <Redirect to="/welcome/signup"/>}
              />
              <Route exact path="/settings" component={ProfileForm}/>
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    )
  }
}
