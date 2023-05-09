import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// import AsyncStorage from

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Welcom To Home</Text>
      <TouchableOpacity
        style={styles.buttons}
        title="SignOut"
        onPress={() => navigation.navigate('signUp')}>
        <Text style={styles.buttonsText}>SignOut</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        title="Settings"
        onPress={() => navigation.navigate('settings')}>
        <Text style={styles.buttonsText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    margin: 10,
    backgroundColor: '#566D7E',
    justifyContent: 'flex-end',
    borderRadius: 20,
  },
  buttonsText: {
    color: '#fff',
    fontSize: 20,
    padding: 10,
    fontWeight: '800',
    textAlign: 'center',
  },
});
export default HomeScreen;
