import superagent from 'superagent';

export const createAction = picture => ({
  type: 'CLIENT_PICTURE_CREATE',
  payload: picture,
});

export const getMyPictures = picture => ({
  type: 'GET_PICTURES',
  payload: picture,
});

export const createActionRequest = (picture) => (dispatch) => {
  let token = localStorage.getItem('token');

  return superagent.post(`${__API_URL__}/photos`)
    .set('Authorization', `Bearer ${token}`)
    .field('description',picture.description)
    .attach('photo',picture.photo)
    .then( response => {
      return dispatch(createAction(response.body));
    });
};

export const getMyPicturesRequest = (picture) => (dispatch) => {
  let token = localStorage.getItem('token');
  
  return superagent.get(`${__API_URL__}/photos/me`)
    .set('Authorization', `Bearer ${token}`)
    .then( response => {
      return dispatch(getMyPictures(response.body));
    });
};