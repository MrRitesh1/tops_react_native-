import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBY-cZiYSZsybIqyKbM05yGse6QxfpcXYg',
  authDomain: 'task-795d6.firebaseapp.com',
  projectId: 'task-795d6',
  storageBucket: 'task-795d6.appspot.com',
  messagingSenderId: '339842737918',
  appId: '1:339842737918:web:b2961d47e05f181c68a7af',
  measurementId: 'G-ZXKRY4TCHC',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth (app)