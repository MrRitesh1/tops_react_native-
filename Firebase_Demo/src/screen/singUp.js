import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import {
//   createUserWithEmailAndPassword,
//   indexedDBLocalPersistence,
// } from 'firebase/auth';
import {firebase} from '../../enviroment/config';
// import {addDoc, collection, doc, setDoc} from 'firebase/firestore/lite';
const SingUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [fastName, setFastName] = useState('');
  const [lastName, setLastName] = useState('');

  const [error, setError] = useState({field: '', message: ''});

  // useEffect(() => {
  //   if (firebase) {
  //     firebase
  //       .auth()
  //       .createUserWithEmailAndPassword('mridul@gmail.com', 'password')
  //       .then(response => {
  //         const uid = response.user.uid;
  //         const data = {
  //           id: uid,
  //           email: 'mridul@gmail.com',
  //           fullName: 'Mridul',
  //         };
  //         const usersRef = firebase.firestore().collection('users');
  //         usersRef
  //           .doc(uid)
  //           .set(data)
  //           .then(() => {
  //             navigation.navigate('Home', {user: data});
  //           })
  //           .catch(error => {
  //             alert(error);
  //           });
  //       })
  //       .catch(error => {
  //         alert(error);
  //       });
  //   }
  // }, []);

    const SingUp = () => {
      // let re = /\S+@\S+\.\S+/;
      // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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
              Email: user.email,
              FastName: fastName,
              LastName: lastName,
            };

            const addUser = await addDoc(usetCollection, data);
            console.log('addUser ===============---->', addUser);
            navigation.navigate('home');
          })
          .catch(err => console.log(err));
      }
    };

  return (
    <View style={styles.main}>
      <ScrollView style={[styles.contentMainBody, styles.shado]}>
        <View style={[styles.contentHedar, styles.shado]}>
          <Text style={{fontSize: 25, fontWeight: '700'}}>SingUp</Text>
        </View>
        <View style={styles.contentBody}>
          <TextInput
            style={styles.info}
            placeholder="fastName"
            value={fastName}
            onChangeText={value => setFastName(value)}
          />
          <TextInput
            style={styles.info}
            placeholder="lastName"
            value={lastName}
            onChangeText={value => setLastName(value)}
          />
          <TextInput
            style={styles.info}
            placeholder="Email ID"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          {error.field === 'email' && (
            <Text style={styles.validatorText}>{error.message}</Text>
          )}

          {/* <TextInput style={styles.info} placeholder="Mobil Numbar" />
          <TextInput style={styles.info} placeholder="DOB" />
          <TextInput style={styles.info} placeholder="Address" /> */}
          <TextInput
            style={styles.info}
            placeholder="password"
            value={password}
            onChangeText={value => setpassword(value)}
          />
          {error.field === 'password' && (
            <Text style={styles.validatorText}>{error.message}</Text>
          )}

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.buttons}
              title="SignIn"
              // onPress={SingUp}
            >
              <Text style={styles.buttonsText}>SignIn</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              title="SignIn"
              onPress={() => navigation.navigate('login')}>
              <Text style={styles.buttonsText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    marginTop: 30,
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
    flex: 0.5,
    borderRadius: 20,
    // margin: 15,
    margin: 10,
    display: 'flex',
    // marginLeft: 10,
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

export default SingUpScreen;
