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
import {addDoc, collection, doc, setDoc} from 'firebase/firestore/lite';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '../../enviroment/config';

export const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const [error, setError] = useState({field: '', message: ''});
  const SingUp = () => {
    let loginError = {field: '', message: ''};
    if (email === '') {
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
          console.log(user);
          const usetCollection = collection(db, 'user');
          const data = {
            id: user.uid,
            Email: user.email,
            Name: name,
            Mobile: mobile,
          };

          const addUser = await addDoc(usetCollection, data);
          console.log('addUser ===============---->', addUser);
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
          {backgroundColor: '#fff', borderRadius: 20, marginBottom: 40},
        ]}>
        <View style={styles.contenBody}>
          <Text style={{fontSize: 25, fontWeight: '900', marginBottom: 20}}>
            Sign-Up
          </Text>

          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Name</Text>
            <TextInput
              style={styles.inputText}
              placeholder="name"
              value={name}
              onChangeText={value => setName(value)}
            />
          </View>
          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Mobile</Text>
            <TextInput
              style={styles.inputText}
              placeholder="mobile"
              value={mobile}
              onChangeText={value => setMobile(value)}
            />
          </View>
          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Email</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Email ID"
              value={email}
              onChangeText={value => setEmail(value)}
            />
          </View>
          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Password</Text>
            <TextInput
              style={styles.inputText}
              placeholder="password"
              value={password}
              onChangeText={value => setpassword(value)}
            />
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
