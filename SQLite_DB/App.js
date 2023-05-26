import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screen/login';
import HomeScreen from './src/screen/home';

const App = () => {
  const Stack = createStackNavigator();
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="login" component={LoginScreen} />
    //     <Stack.Screen name="home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <View>
      <Text>Welcom</Text>
      {/* <LoginScreen /> */}
      {/* <HomeScreen /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
