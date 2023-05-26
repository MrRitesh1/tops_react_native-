import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SingUpScreen from './src/screen/singUp';
import LoginScreen from './src/screen/login';
import HomeScreen from './src/screen/home';
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {firebaseConfig} from './enviroment/config';
import {firebase} from '@react-native-firebase/auth';
const Stack = createStackNavigator();

const App = () => {
  firebase.initializeApp(firebaseConfig);
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="singUp" component={SingUpScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
