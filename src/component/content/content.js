import React from 'react'
import {connect} from 'react-redux';

import PictureForm from './photo-form';
import * as pictureActions from '../../action/picture-actions';

class Content extends React.Component {
  componentWillMount() {
    this.props.getPictures()
  }
  render() {

    return (
      <div>
        <h1>My Gallery</h1>
        <PictureForm onComplete={this.props.createPicture} />
        {this.props.pictures ?
          this.props.pictures.data.map(picture =>
            <div key={picture._id}>
              {/* <span onClick={() => this.props.deletePicture(picture)}>x</span> */}
              <img style={{width:'200px'}} src={picture.url} />
              <p>{picture.description}</p>
            </div>)
            : undefined}   
      </div>
    )
  }
}
const mapStateToProps = state => ({
  pictures: state.picture
})
const mapDispatchToProps = dispatch => ({
  createPicture : picture => dispatch(pictureActions.createActionRequest(picture)),
  getPictures : () => dispatch(pictureActions.getMyPicturesRequest()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Content);