import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../enviroment/config';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [passwerd, setPasswerd] = useState('');
  const [error, setError] = useState({field: '', message: ''});
auth.currentUser

  const Login = () => {
    let loginError = {field: '', message: ''};
    if (email === '') {
      loginError.field = 'email';
      loginError.message = 'required for email';
      setError(loginError);
    } else if (passwerd === '') {
      loginError.field = 'passwerd';
      loginError.message = 'required for passwerd';
      setError(loginError);
    } else {
      setError({field: '', message: ''});
      signInWithEmailAndPassword(auth, email, passwerd)
        .then(user => {
          handleCheck(user);
        })
        .catch(err => handleCheck(err));
      navigation.navigate('home');
    }
  };

  return (
    <View style={styles.main}>
      <View style={[styles.contentMainBody, styles.shado]}>
        <View style={[styles.contentHedar, styles.shado]}>
          <Text style={{fontSize: 25, fontWeight: '700'}}>Login</Text>
        </View>
        <View style={styles.contentBody}>
          <TextInput
            style={styles.info}
            placeholder="User ID"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          {error.field === 'email' && (
            <Text style={styles.validatorText}>{error.message}</Text>
          )}

          <TextInput
            style={styles.info}
            placeholder="Passwerd"
            value={passwerd}
            onChangeText={value => setPasswerd(value)}
          />
          {error.field === 'passwerd' && (
            <Text style={styles.validatorText}>{error.message}</Text>
          )}

          <TouchableOpacity
            style={styles.buttons}
            title="Login"
            onPress={Login}>
            <Text style={styles.buttonsText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shado: {
    shadowColor: '#2B1B17',
    elevation: 10,
  },
  main: {
    height: '100%',
    backgroundColor: '#fff',
  },
  contentMainBody: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#ccffff',
    marginBottom: 50,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 40,
    // padding: 15,
  },
  contentHedar: {
    flex: 0.4,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  contentBody: {
    flex: 4.6,
    justifyContent: 'center',
  },
  info: {
    height: 40,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    // marginLeft: 10,
    // marginRight: 10,
    margin: 12,
    // borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: '#000',
    fontSize: 18,
    padding: 10,
    fontWeight: '600',
  },
  buttons: {
    backgroundColor: '#fff',
    // flex: 0.2,
    borderRadius: 20,
    // margin: 15,
    display: 'flex',
    marginLeft: 100,
    width: '50%',
  },
  buttonsText: {
    color: '#000',
    fontSize: 20,
    padding: 10,
    fontWeight: '800',
    textAlign: 'center',
  },
  validatorText: {
    // flex: 1,
    color: 'red',
    left: 170,
    fontWeight: 'bold',
  },
  validator: {
    // flex: 1,
    color: 'green',
    left: 20,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
