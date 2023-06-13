import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  Modal,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../styleSheet/loginScreen';
import {auth} from '../../enviroment/config';
import {signInWithEmailAndPassword} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [passwerd, setPasswerd] = useState('');
  const [error, setError] = useState({field: '', message: ''});

  // useEffect(() => {
  //   getData();
  // }, []);
  const getData = async id => {
    try {
      const data = await AsyncStorage.setItem('userData', id);
    } catch (error) {
      console.log(error);
    }
  };

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
        .then(async ({user}) => {
          console.log('login --', user);
          // handleCheck(user)
          getData(user.uid);
          navigation.navigate('home');
        })
        .catch(err => handleCheck(err));
    }
  };
  return (
    <View style={styles.man}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <KeyboardAvoidingView behavior={'height'} style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(20,25,40,0.7)',
              // justifyContent: 'flex-end',
              // paddingHorizontal: 15,
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Forgot Password</Text>
                <View style={[styles.inputContnenar, {width: 300}]}>
                  <Text style={{fontSize: 18, fontWeight: '700'}}>
                    New Password
                  </Text>
                  <TextInput style={styles.inputText} />
                </View>
                <View style={[styles.inputContnenar, {width: 300}]}>
                  <Text style={{fontSize: 18, fontWeight: '700'}}>
                    Re Set Password
                  </Text>
                  <TextInput style={styles.inputText} />
                </View>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Set Password</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
      <Image
        source={require('../assets/images/login.webp')}
        style={styles.loginImage}
      />
      <ScrollView
        style={[
          styles.shado,
          {backgroundColor: '#fff', borderRadius: 20, marginBottom: 40},
        ]}>
        <View style={styles.contenBody}>
          <Text style={{fontSize: 25, fontWeight: '900', marginBottom: 20}}>
            Login
          </Text>

          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Email</Text>
            <TextInput
              style={styles.inputText}
              placeholder="User ID"
              value={email}
              onChangeText={value => setEmail(value)}
            />
          </View>
          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Password</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Passwerd"
              value={passwerd}
              onChangeText={value => setPasswerd(value)}
            />
          </View>
          <TouchableOpacity
            style={{alignItems: 'flex-end'}}
            onPress={() => setModalVisible(true)}>
            <Text>Forgot your password? </Text>
          </TouchableOpacity>
          <View style={styles.buttonBody}>
            <TouchableOpacity style={styles.button} onPress={Login}>
              <Text style={{fontSize: 20, fontWeight: '900'}}>Sing-In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('singUp')}>
              <Text style={{fontSize: 20, fontWeight: '900'}}>Sign-Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
