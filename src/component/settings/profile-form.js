import React from 'react'
import {renderIf} from '../../lib/utils'
import {Redirect} from 'react-router-dom'

const fileToDataURL = file => {
  return new Promise((resolve,reject) => {
    if(!file)
        return reject(new Error('File is required'));


    let reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error',reject);

    return reader.readAsDataURL(file); 
  });
};

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      avatar: '',
      bio: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let { value, files, type } = e.target
    console.log(e.target.type);
    

    if (type === 'file') {
      this.setState({
        avatar: files[0]
      })
    } else {
      this.setState({
        bio: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    let {avatar, bio} = this.state
    this.props.onComplete({ avatar,bio })
    .then(() => this.setState({ avatar: '', bio: '' }))
    .catch(error => this.setState({error}))
  }

  render() {
    return (
      <form
        className="auth-form"
        onSubmit={this.handleSubmit}
        noValidate>

        <input
          type="file"
          name="avatar"
          placeholder="john"
          pattern=""
          onChange={this.handleChange}/>

        <input
          type="text"
          name="bio"
          placeholder="bio"
          value={this.state.bio}
          onChange={this.handleChange}/>

        <button type="submit">Create</button>
      </form>
    )
  }
}
