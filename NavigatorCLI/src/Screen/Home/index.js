import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './homeCSS';

const HomeScrren = ({navigation}) => {
  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={styles.buttons}
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonsText}>Go to Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        title="Go to Profile"
        onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonsText}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScrren;
