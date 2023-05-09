import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

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
  // const onSubmit = async () => {
  //   try {
  //     await AsyncStorage.setItem('name', name, () => {
  //       navigation.navigate('login');
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View style={styles.min}>
      <Text>Welcom To SignUp</Text>

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
export default SignUpScreen;
