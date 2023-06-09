import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './src/screen/homeScreen';
import {WelcomeScreen} from './src/screen/welcomScreen';
import {LoginScreen} from './src/screen/loginScreen';
import {SignUpScreen} from './src/screen/singUpScreen';
import {BottomTab} from './src/components/bottomTab';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="welcom" component={WelcomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="singUp" component={SignUpScreen} />
        <Stack.Screen name="home" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
