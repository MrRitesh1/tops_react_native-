import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScrren from './src/Screen/Home';
import ProfileScrren from './src/Screen/Profile';
import SettingsScrren from './src/Screen/Settings';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CartScrren from './src/Screen/Cart';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
// const TopTab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{headerShown: false}}>
        <BottomTab.Screen name="Home" component={HomeScrren} />
        <BottomTab.Screen name="Cart" component={CartScrren} />
        <BottomTab.Screen name="Profile" component={ProfileScrren} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};
export default App;

// function TopTabScreen() {
//   return (
//     <TopTab.Navigator>
//       <TopTab.Screen name="Home" component={HomeScrren} />
//       <TopTab.Screen name="Chat" component={ChatScrren} />
//       <TopTab.Screen name="Settings" component={SettingsScrren} />
//     </TopTab.Navigator>
//   );
// }

// function StackNavigatorScreen() {
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name="Home" component={HomeScrren} />
//       <Stack.Screen name="Profile" component={ProfileScrren} />
//       <Stack.Screen name="Settings" component={SettingsScrren} />
//     </Stack.Navigator>
//   );
// }

// function DrawerScreen() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={HomeScrren} />
//       <Drawer.Screen name="Profile" component={ProfileScrren} />
//       <Drawer.Screen name="Settings" component={SettingsScrren} />
//     </Drawer.Navigator>
//   );
// }

const styles = StyleSheet.create({});
