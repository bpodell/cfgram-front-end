import reducer from '../reducer';
import thunk from './redux-thunk';
import reporter from './redux-reporter';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';

let appStoreCreate = () => 
  createStore(reducer, composeWithDevTools(applyMiddleware(thunk, reporter)));

export default appStoreCreate;