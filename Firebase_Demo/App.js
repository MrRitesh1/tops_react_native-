import React from 'react';
import {StyleSheet, View} from 'react-native';
import SingUpScreen from './src/screen/singUp';
import LoginScreen from './src/screen/login';
import HomeScreen from './src/screen/home';

const App = () => {
  return (
    <View>
      {/* <SingUpScreen /> */}
      {/* <LoginScreen /> */}
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
