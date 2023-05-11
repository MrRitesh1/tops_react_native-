const {
  SET_USAR_NAME,
  SET_USAR_EMAI,
  SET_USAR_PASSWERD,
  SET_LIST,
} = require('../actions');

const initialState = {
  name: '',
  email: '',
  passwerd: '',
  users: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USAR_NAME:
      return {...state, name: action.payload};
    case SET_USAR_EMAI:
      return {...state, email: action.payload};
    case SET_USAR_PASSWERD:
      return {...state, passwerd: action.payload};
    case SET_LIST:
      return {...state, users: action.payload};
    default:
      return state;
  }
}

export default userReducer;
