import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './src/screen/signUp/signUp';
import LoginScreen from './src/screen/login';
import Profiles from './src/screen/Profiles';
import Welcome from './src/screen/welcome';
import BottomTabScreen from './src/components/bottomTabBar';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';
// import FontAwesome, { faHome ,faSearch} from 'react-native-fontawesome';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="signUp" component={SignUpScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="home" component={BottomTabScreen} />
          <Stack.Screen name="profiles" component={Profiles} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
