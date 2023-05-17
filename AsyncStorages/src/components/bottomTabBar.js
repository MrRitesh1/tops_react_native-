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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/home';
import Chat from '../screen/chat';
import Settings from '../screen/settings';
import DrowerScreen from './drower';
import TopTabs from './topTab';
import BusinessScreen from '../screen/Business Tools';

const BottomTab = createBottomTabNavigator();

const BottomTabScreen = ({navigation}) => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          // shadowColor: '#2B1B17',
          // elevation: 30,
          fontWeight: '800',
          backgroundColor: '#99ff99',
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#000',
        tabBarIcon: ({siza, color, focused}) => {
          let iconName;
          if (route.name === 'home') {
            iconName = faHome;
          }
          if (route.name === 'business') {
            iconName = faSearch;
          }
          if (route.name === 'settings') {
            iconName = faSearch;
          }

          siza = focused ? 30 : 30;
          return <FontAwesomeIcon icon={iconName} size={siza} />;
        },
        headerShown: false,
      })}>
      <BottomTab.Screen name="home" component={TopTabs} />
      {/* <BottomTab.Screen name="home" component={HomeScreen} /> */}
      <BottomTab.Screen name="business" component={BusinessScreen} />
      <BottomTab.Screen name="settings" component={Settings} />
    </BottomTab.Navigator>
  );
};
const styles = StyleSheet.create({});

export default BottomTabScreen;
