import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Chat from '../screen/chat';
import StatusScreen from '../screen/status';
import CallsScreen from '../screen/calls';
import HomeScreen from '../screen/home';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 15},
        tabBarItemStyle: {width: 100},
        tabBarStyle: {backgroundColor: '#99ff99'},
      }}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="chat" component={Chat} />
      <Tab.Screen name="status" component={StatusScreen} />
      <Tab.Screen name="calls" component={CallsScreen} />
    </Tab.Navigator>
  );
};

export default TopTabs;
