import React from 'react'
import {Link} from 'react-router-dom'
import {renderIf, getProfileRequest} from '../../lib/utils'
import {tokenDelete} from '../../action/auth-actions'
import {connect} from 'react-redux'
import Avatar from './avatar'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: '',
        }
    }
    componentWillMount() {
      getProfileRequest()
        .then(res => this.setState({
            profile: res
        }))
        .catch();
    }

  render() {
    return (
      <header>
        {renderIf(this.state.profile, <Avatar avatar={this.state.profile.avatar} bio={this.state.profile.bio}/>)}
        <nav>
          <ul>
            {renderIf(!this.props.token,
              <React.Fragment>
                <li><Link to="/welcome/signup">Signup</Link></li>
                <li><Link to="/welcome/signin">Signin</Link></li>
              </React.Fragment>
            )}
            {renderIf(this.props.token,
              <React.Fragment>
                <li><Link to="/content">Content</Link></li>
                <li onClick={this.props.tokenDelete}><Link to="/welcome/signin">Logout</Link></li>
              </React.Fragment>
            )}
          </ul>
        </nav>
      </header>
    )
  }
}

// let mapStateToProps = state => ({})
// let mapDispatchToProps = dispatch => ({
//   profileGet: (token) => dispatch(getProfileRequest(token)),
// })
// export default connect(mapStateToProps, mapDispatchToProps)(Navbar)