import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import SignUpScreen from './src/screen/signUp/signUp';
import LoginScreen from './src/screen/login';
import Profiles from './src/screen/Profiles';
import Welcome from './src/screen/welcome';
import BottomTabScreen from './src/components/bottomTabBar';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';
import StatusScreen from './src/screen/status';
import CallsScreen from './src/screen/calls';
import CustomDrawer from './src/components/drower';
import HomeScreen from './src/screen/home';
// import FontAwesome, { faHome ,faSearch} from 'react-native-fontawesome';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="signUp" component={SignUpScreen} />
          <Stack.Screen name="login" component={LoginScreen} /> */}
          <Stack.Screen name="home" component={BottomTabScreen} />
          {/* <Stack.Screen name="profiles" component={HomeTag} /> */}
          <Stack.Screen name="profiles" component={Profiles} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

// export function HomeTag() {
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <CustomDrawer {...props} />}
//       initialRouteName="Home"
//       screenOptions={{
//         headerShown: false,
//         drawerActiveBackgroundColor: 'mediumblue',
//         drawerActiveTintColor: '#fff',
//         drawerInactiveTintColor: '#333',
//       }}>
//       <Drawer.Screen name="home" component={HomeScreen} />
//       <Drawer.Screen name="profiles" component={Profiles} />
//       <Drawer.Screen name="calls" component={CallsScreen} />
//     </Drawer.Navigator>
//   );
// }

const styles = StyleSheet.create({});

export default App;
