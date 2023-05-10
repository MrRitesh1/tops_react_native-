export const SET_USAR_NAME = 'SET_USAR_NAME';
export const SET_USAR_EMAI = 'SET_USAR_EMAIL';
export const SET_USAR_PASSWERD = 'SET_USAR_PASSWERD';

export const setName = name => dispacth => {
  dispacth({
    type: SET_USAR_NAME,
    payload: name,
  });
};
export const setEmail = email => dispacth => {
  dispacth({
    type: SET_USAR_EMAI,
    payload: email,
  });
};
export const setPasswerd = passwerd => dispacth => {
  dispacth({
    type: SET_USAR_PASSWERD,
    payload: passwerd,
  });
};
