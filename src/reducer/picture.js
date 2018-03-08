export default (state=null, action) => {
  let {type, payload} = action;
    
  switch(type) {
  case 'GET_PICTURES': return payload;
  case 'CLIENT_PICTURE_CREATE':
    let newState = {...state};
    newState.picture.data.push(payload)
    return newState;
  case 'TOKEN_DELETE': return null;
  default: return state;
  }
};
    