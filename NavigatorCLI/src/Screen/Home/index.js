import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './homeCSS';

const HomeScrren = ({navigation}) => {
  const data = [
    {id: 1, name: 'Doremon'},
    {id: 2, name: 'Nobita'},
    {id: 3, name: 'Tom'},
    {id: 4, name: 'Jery'},
    {id: 5, name: 'SpidarMen'},
  ];
  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={styles.buttons}
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', {name: 'Hello', id: 1})}>
        <Text style={styles.buttonsText}>Go to Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        title="Go to Profile"
        onPress={() => navigation.navigate('Settings', {data})}>
        <Text style={styles.buttonsText}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScrren;
