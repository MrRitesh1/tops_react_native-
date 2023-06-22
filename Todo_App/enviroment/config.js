// import * as firebase from 'firebase';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB9ImDodszEq6gqTHfx0K4st3ANVVDPXxw',
  authDomain: 'to-do-b808c.firebaseapp.com',
  projectId: 'to-do-b808c',
  storageBucket: 'to-do-b808c.appspot.com',
  messagingSenderId: '421480010927',
  appId: '1:421480010927:web:b50340e49cd1a81a03305a',
  measurementId: 'G-W3TSEQ38RW',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
