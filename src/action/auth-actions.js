import superagent from 'superagent';

export const tokenSet = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const tokenDelete = () => ({
  type: 'TOKEN_DELETE',
});

export const signupRequest = user => dispatch => {
  return superagent.post(`${__API_URL__}/signup`)
    .send(user)
    .then(res => {
      console.log(res.body);
      dispatch(tokenSet(res.text));
      try {
        localStorage.setItem('token', res.text);
        localStorage.setItem('userid', res.body._id);
      } catch(e) {
        console.log(e);
      }
    });
};

export const signinRequest = user => dispatch => {
  return superagent.get(`${__API_URL__}/login`)
    .auth(user.username, user.password)
    .then(res => {
      dispatch(tokenSet(res.text));
      localStorage.setItem('userid', res.body._id);
    });
};