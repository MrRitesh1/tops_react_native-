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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faSearch} from '@fortawesome/free-solid-svg-icons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const MaterialBottomTab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
// const TopTab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({route}) => ({
          // tabBarIcon: ({siza, color, focused}) => {
          //   let iconName;
          //   if (route.name === 'Home') {
          //     iconName = faHome;
          //   }
          //   if (route.name === 'Cart') {
          //     iconName = faSearch;
          //   }
          //   if (route.name === 'Profile') {
          //     iconName = faHome;
          //   }
          //   siza = focused ? 30 : 30;
          //   return <FontAwesomeIcon icon={iconName} size={siza} />;
          // },
          headerShown: false,
        })}>
        <BottomTab.Screen name="Home" component={StackNavigatorScreen} />
        <BottomTab.Screen name="Cart" component={CartScrren} />
        <BottomTab.Screen name="Profile" component={ProfileScrren} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};
export default App;

// function MaterialBottomTab() {
//   return (
//     <MaterialBottomTab.Navigator
//       initialRouteName="Home"
//       activeColor="#f0edf6"
//       inactiveColor="#3e2465"
//       barStyle={{paddingBottom: 5}}>
//       <MaterialBottomTab.Screen name="Home" component={StackNavigatorScreen} />
//       <MaterialBottomTab.Screen name="Cart" component={CartScrren} />
//       <MaterialBottomTab.Screen name="Profile" component={ProfileScrren} />
//     </MaterialBottomTab.Navigator>
//   );
// }

// function TopTabScreen() {
//   return (
//     <TopTab.Navigator>
//       <TopTab.Screen name="Home" component={HomeScrren} />
//       <TopTab.Screen name="Chat" component={ChatScrren} />
//       <TopTab.Screen name="Settings" component={SettingsScrren} />
//     </TopTab.Navigator>

//   );
// }

function StackNavigatorScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScrren} />
      <Stack.Screen name="Profile" component={ProfileScrren} />
      <Stack.Screen name="Settings" component={SettingsScrren} />
    </Stack.Navigator>
  );
}

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
