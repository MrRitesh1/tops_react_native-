import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD7j6K_QX1cK-h6H-yv-aFoDdRHFV4Sox4',
  authDomain: 'optical-wall-387009.firebaseapp.com',
  projectId: 'optical-wall-387009',
  storageBucket: 'optical-wall-387009.appspot.com',
  messagingSenderId: '850417141920',
  appId: '1:850417141920:web:e0b6287ef5d2c1cb6de1c5',
  measurementId: 'G-PL1M21SQQC',
};

// if (!firebase.apps.length) {
//   console.log('girebase ==>');
//   firebase.initializeApp(firebaseConfig);
// }
firebase.initializeApp(firebaseConfig);
export {firebase};
