import React from 'react'
import {connect} from 'react-redux'
import ProfileForm from './profile-form'
import {createProfileRequest} from '../../action/profile-actions'


class Settings extends React.Component {
  render() {
    console.log('__LANDING_PROPS__', this.props)
    let {params} = this.props.match
    // let onComplete = params.auth === 'signin'
    //   ? this.props.signin
    //   : this.props.signup

    return (
      <div className="landing-container">
        <ProfileForm
          auth={params.auth}
          onComplete={this.props.createProfile}/>
      </div>
    )
  }
}

let mapStateToProps = () => ({})
let mapDispatchToProps = dispatch => ({
  createProfile: profile => dispatch(createProfileRequest(profile)),
//   signin: user => dispatch(signinRequest(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);