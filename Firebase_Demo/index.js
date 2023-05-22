/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
const firebaseConfig = {
  apiKey: 'AIzaSyAwTnk68Q8FhIKxt-J_JtyLAaHbhUASJd4',
  authDomain: 'prime-haven-368912.firebaseapp.com',
  projectId: 'prime-haven-368912',
  storageBucket: 'prime-haven-368912.appspot.com',
  messagingSenderId: '893523402438',
  appId: '1:893523402438:web:1d2476095f1d5058c8c1c7',
  measurementId: 'G-D146PX8K0M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
AppRegistry.registerComponent(appName, () => App);