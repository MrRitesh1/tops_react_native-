import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profiles = ({navigation}) => {
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
        Welcom To Profile
      </Text>
      <Text style={styles.text}>Name : {data.name}</Text>
      <Text style={styles.text}>Email : {data.email}</Text>
      <Text style={styles.text}>Passwerd : {data.passwerd}</Text>
      <TouchableOpacity
        style={styles.buttons}
        title="SignOut"
        onPress={() => navigation.navigate('signUp')}>
        <Text style={styles.buttonsText}>SignOut</Text>
      </TouchableOpacity>
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
export default Profiles;
