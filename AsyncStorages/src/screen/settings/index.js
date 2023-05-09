import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = ({navigation}) => {
  const [data, setData] = useState('');

  const getData = async () => {
    try {
      // const data = await AsyncStorage.getItem('name', 'email', 'passwerd');
      const respos = await AsyncStorage.getItem('userData');

      setData(JSON.parse(respos));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={[styles.min, styles.shado]}>
      <Text style={[styles.text, {textAlign: 'center'}]}>
        Welcom To Settings
      </Text>
      <Text style={styles.text}>DATA{data.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  min: {
    backgroundColor: '#fff',
    height: '40%',
    width: '90%',
    justifyContent: 'center',
    margin: '5%',
    borderRadius: 20,
    padding: 20,
    // borderWidth: 0.5,
    // borderColor: 'red',
    // alignItems: 'center',
  },
  shado: {
    shadowColor: '#2B1B17',
    elevation: 30,
  },
  text: {
    fontSize: 20,
  },
});
export default Settings;
