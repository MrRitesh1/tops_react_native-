import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [data, setData] = useState('');

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('userData');
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.min}>
      <Text style={{fontSize: 20, margin: 10}}>Welcom To Login </Text>

      <TextInput style={styles.info} placeholder="email" />
      <TextInput style={styles.info} placeholder="passwerd" />

      <TouchableOpacity
        style={styles.buttons}
        title="Login"
        onPress={() => navigation.navigate('home')}>
        <Text style={styles.buttonsText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  min: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  info: {borderWidth: 1, width: '90%', borderRadius: 10, margin: 5},
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
export default LoginScreen;
