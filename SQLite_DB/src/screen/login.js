import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
let db = openDatabase({name: 'UserDatabase.db'});

const LoginScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        (tx, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_email VARCHAR(50), user_address VARCHAR(255))',
              [],
            );
          }
        },
      );
    });
  }, []);

  return (
    <View style={styles.body}>
      <TextInput
        placeholder="Usar Name"
        style={styles.input}
        value={name}
        onChangeText={tex => setName(tex)}
      />
      <TextInput
        placeholder="Usar Name"
        style={styles.input}
        value={email}
        onChangeText={tex => setEmail(tex)}
      />
      <TextInput
        placeholder="Usar Name"
        style={styles.input}
        value={address}
        onChangeText={tex => setAddress(tex)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('home')}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
          Save User
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    margin: 10,
    width: '80%',
  },
  button: {
    backgroundColor: 'green',
    width: '50%',
    height: 40,
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
