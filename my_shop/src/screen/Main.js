import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabScreen from '../common/BottomTab';

const Drawer = createDrawerNavigator();

const Main = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="home"
        component={BottomTabScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default Main;
