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
  const [email, setEmail] = useState('');
  const [passwerd, setPasswerd] = useState('');

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('userData');
      setData(JSON.parse(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    // <View style={styles.min}>
    //   <Text style={{fontSize: 20, margin: 10}}>Welcom To Login </Text>

    //   <TextInput style={styles.info} placeholder="email" />
    //   <TextInput style={styles.info} placeholder="passwerd" />

    // </View>
    <View style={styles.min}>
      <View style={[styles.minBody, styles.shado]}>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <TouchableOpacity
            style={[styles.topButtons, {borderTopLeftRadius: 20}]}
            title="SignUp"
            onPress={() => navigation.navigate('signUp')}>
            <Text style={styles.buttonsText}>SignUp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.topButtons, {borderTopRightRadius: 20}]}
            title="Login"
            onPress={() => navigation.navigate('login')}>
            <Text style={styles.buttonsText}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.minText}>Welcom To Login</Text>

        <TextInput
          style={styles.info}
          value={email}
          onChangeText={setEmail}
          placeholder="email"
        />
        <TextInput
          style={styles.info}
          value={passwerd}
          onChangeText={setPasswerd}
          placeholder="passwerd"
        />

        <TouchableOpacity
          style={styles.buttons}
          title="Login"
          onPress={() => navigation.navigate('home')}>
          <Text style={styles.buttonsText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  min: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccffcc',
  },
  shado: {
    shadowColor: '#2B1B17',
    elevation: 30,
  },
  minBody: {
    width: '90%',
    height: 385,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 20,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  topButtons: {
    marginBottom: 10,
    marginTop: 10,
    width: '50%',
    backgroundColor: '#99ff99',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minText: {
    color: '#2B1B17',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: '700',
  },
  info: {
    borderWidth: 1,
    width: '90%',
    fontSize: 20,
    borderRadius: 10,
    margin: 5,
  },
  buttons: {
    backgroundColor: '#99ff99',
    justifyContent: 'flex-end',
    // borderRadius: 20,
    marginTop: 30,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  buttonsText: {
    color: '#000',
    fontSize: 20,
    padding: 10,
    fontWeight: '800',
    textAlign: 'center',
  },
});
export default LoginScreen;
