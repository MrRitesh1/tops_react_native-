import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screen/home';
import Settings from '../screen/settings';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarItemStyle: {width: 100},
        tabBarStyle: {backgroundColor: '#99ff99'},
      }}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TopTabs;
