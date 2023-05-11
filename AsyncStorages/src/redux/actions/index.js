export const SET_USAR_NAME = 'SET_USAR_NAME';
export const SET_USAR_EMAI = 'SET_USAR_EMAIL';
export const SET_USAR_PASSWERD = 'SET_USAR_PASSWERD';
export const SET_LIST = 'SET_LIST';
export const API_URL = 'https://jsonplaceholder.typicode.com/posts';
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

export const getUserList = () => {
  try {
    return async dispacth => {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'applicaton/json',
        },
      });
      const json = await response.json();
      if (json) {
        dispacth({
          type: SET_LIST,
          payload: json,
        });
      } else {
        console.log('Unable to Fetch');
      }
    };
  } catch (erroe) {
    console.log(erroe);
  }
};
