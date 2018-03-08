import superagent from 'superagent';

export const createProfile = profile => ({
  type: 'PROFILE_CREATE',
  payload: profile,
});

export const getProfile = profile => ({
  type: 'PROFILE_GET',
  payload: profile,
});

export const createProfileRequest = (profile) => (dispatch) => {
  let token = localStorage.getItem('token');

  return superagent.post(`${__API_URL__}/profiles`)
    .set('Authorization', `Bearer ${token}`)
    .field('bio',profile.bio)
    .attach('avatar',profile.avatar)
    .then( response => {
      return dispatch(createProfile(response.body));
    });
};

