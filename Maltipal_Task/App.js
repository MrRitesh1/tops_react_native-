import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/home';
import ExampalScreen from './src/exampal';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import APIcallAxios from './src/api_call';
import WelcomeScreen from './src/welcome';
import LoginScreen from './src/login';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="exampal" component={ExampalScreen} />
      <Tab.Screen name="apicall" component={APIcallAxios} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default App;
