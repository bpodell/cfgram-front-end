import React from 'react'
import {Link} from 'react-router-dom'
import {renderIf} from '../../lib/utils'
import {tokenDelete} from '../../action/auth-actions'

export default class Avatar extends React.Component {
  render() {
    return (
          <div>
              <img style={{width:'200px'}} src={this.props.avatar} />
              <p>{this.props.bio}</p>
          </div>
    )
  }
}
