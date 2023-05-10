const {SET_USAR_NAME, SET_USAR_EMAI, SET_USAR_PASSWERD} = require('../actions');

const initialState = {
  name: '',
  email: '',
  passwerd: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USAR_NAME:
      return {...state, name: action.payload};
    case SET_USAR_EMAI:
      return {...state, email: action.payload};
    case SET_USAR_PASSWERD:
      return {...state, passwerd: action.payload};
    default:
      return state;
  }
}

export default userReducer;
