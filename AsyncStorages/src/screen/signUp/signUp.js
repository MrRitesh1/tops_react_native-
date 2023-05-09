import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Facebook from '../../image/signUpScreen/Facebook.png';
import Google from '../../image/signUpScreen/google.png';
import Instagram from '../../image/signUpScreen/instagram.png';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passwerd, setPasswerd] = useState('');

  const onSubmit = async () => {
    try {
      const userData = {name, email, passwerd};
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      navigation.navigate('login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
        <Text style={styles.minText}>Welcom To SignUp</Text>

        <TextInput
          style={styles.info}
          value={name}
          onChangeText={setName}
          placeholder="name"
        />
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
          title="SignIn"
          onPress={onSubmit}>
          <Text style={styles.buttonsText}>SignIn</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <TouchableOpacity>
          <Image source={Facebook} style={{height: 50, width: 50}} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Instagram} style={{height: 50, width: 50}} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Google} style={{height: 50, width: 50}} />
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
    height: 440,
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
  info: {borderWidth: 1, width: '90%', borderRadius: 10, margin: 5},
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
export default SignUpScreen;
