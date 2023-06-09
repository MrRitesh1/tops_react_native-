import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../styleSheet/singUpScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addDoc, collection, doc, setDoc} from 'firebase/firestore/lite';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '../../enviroment/config';

export const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const [error, setError] = useState(false, {field: '', message: ''});

  // const onSubmit = async () => {
  //   try {
  //     const userData = {name, email, password};
  //     await AsyncStorage.setItem('userData', JSON.stringify(userData));
  //     navigation.navigate('home');
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // };
  const getData = async id => {
    try {
      const data = await AsyncStorage.setItem('userData', id);
    } catch (error) {
      console.log(error);
    }
  };
  const SingUp = async () => {
    let loginError = {field: '', message: ''};
    if (name === '') {
      loginError.field = 'name';
      loginError.message = 'required for name';
      setError(true);
    } else if (mobile === '') {
      loginError.field = 'mobile';
      loginError.message = 'required for mobile';
      setError(loginError);
    } else if (email === '') {
      loginError.field = 'email';
      loginError.message = 'required for email';
      setError(loginError);
    } else if (password === '') {
      loginError.field = 'password';
      loginError.message = 'required for password';
      setError(loginError);
    } else {
      setError({field: '', message: ''});
      createUserWithEmailAndPassword(auth, email, password)
        .then(async ({user, index}) => {
          console.log('userset', user);
          const usetCollection = collection(db, 'user');
          const data = {
            id: user.uid,
            Email: user.email,
            Name: name,
            Mobile: mobile,
          };

          const addUser = await addDoc(usetCollection, data);
          console.log('addUser ===============---->', addUser);
          // getData(user);
          navigation.navigate('login');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <View style={styles.man}>
      <Image
        source={require('../assets/images/signup.jpg')}
        style={{
          width: 250,
          height: 250,
          marginLeft: 50,
          marginBottom: 5,
        }}
      />
      <ScrollView
        style={[
          styles.shado,
          {backgroundColor: '#fff', borderRadius: 20, marginBottom: 20},
        ]}>
        <View style={styles.contenBody}>
          <Text style={{fontSize: 25, fontWeight: '900', marginBottom: 20}}>
            Sign-Up
          </Text>

          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700', marginTop: 2}}>
              Name
            </Text>
            <TextInput
              style={styles.inputText}
              placeholder="name"
              value={name}
              onChangeText={value => setName(value)}
            />
            {error && !name && (
              <Text style={styles.error}>Enter valid name</Text>
            )}
          </View>
          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700', marginTop: 2}}>
              Mobile
            </Text>
            <TextInput
              style={styles.inputText}
              placeholder="mobile"
              value={mobile}
              onChangeText={value => setMobile(value)}
            />
            {error && !mobile && (
              <Text style={styles.error}>Enter valid mobile</Text>
            )}
          </View>

          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700', marginTop: 2}}>
              Email
            </Text>
            <TextInput
              style={styles.inputText}
              placeholder="Email ID"
              value={email}
              onChangeText={value => setEmail(value)}
            />
            {error && !email && (
              <Text style={styles.error}>Enter valid email</Text>
            )}
          </View>

          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700', marginTop: 2}}>
              Password
            </Text>
            <TextInput
              style={styles.inputText}
              secureTextEntry={true}
              placeholder="password"
              value={password}
              onChangeText={value => setpassword(value)}
            />
            {error && !password && (
              <Text style={styles.error}>Enter valid password</Text>
            )}
          </View>

          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text style={{color: 'green', fontWeight: '800'}}>
                already account login{' '}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonBody}>
            <TouchableOpacity style={styles.button} onPress={SingUp}>
              <Text style={{fontSize: 20, fontWeight: '900'}}>Sign-Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
