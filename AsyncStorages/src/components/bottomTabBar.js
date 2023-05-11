import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/home';
import Chat from '../screen/chat';
import Settings from '../screen/settings';
import DrowerScreen from './drower';

const BottomTab = createBottomTabNavigator();

const BottomTabScreen = ({navigation}) => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // shadowColor: '#2B1B17',
          // elevation: 30,
          backgroundColor: '#99ff99',
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#000',
      }}
      // screenOptions={({route}) => ({
      // tabBarIcon: ({siza, color, focused}) => {
      //   let iconName;
      //   if (route.name === 'home') {
      //     iconName = faHome;
      //   }
      //   if (route.name === 'settings') {
      //     iconName = faSearch;
      //   }

      //   siza = focused ? 30 : 30;
      //   return <FontAwesomeIcon icon={iconName} size={siza} />;
      // },
      //   headerShown: false,
      // })}
    >
      <BottomTab.Screen name="home" component={HomeScreen} />
      <BottomTab.Screen name="chat" component={Chat} />
      <BottomTab.Screen name="settings" component={Settings} />
    </BottomTab.Navigator>
  );
};
const styles = StyleSheet.create({});

export default BottomTabScreen;
