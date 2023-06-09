import React from 'react';
import {} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TodoScreen} from '../screen/todoScreen';
import {ProfileScreen} from '../screen/profileScreen';
import {HomeScreen} from '../screen/homeScreen';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="todo" component={TodoScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
