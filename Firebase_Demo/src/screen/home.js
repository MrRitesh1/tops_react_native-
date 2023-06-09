import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import {
  createUserWithEmailAndPassword,
  indexedDBLocalPersistence,
} from 'firebase/auth';
import {auth, db, firebase} from '../../enviroment/config';
import {useNavigation} from '@react-navigation/native';
import {addDoc, collection} from 'firebase/firestore/lite';

const HomeScreen = () => {
  console.log('=============>', auth.currentUser);
  const [todos, setTodos] = useState([]);
  const todoRef = firebase.firestore().collection('todos');
  const [addData, setAddData] = useState('');
  const navigation = useNavigation();
  const [error, setError] = useState({field: '', message: ''});

  // const usetCollection = collection(db, 'todo');
  // const data = {
  //   Email: user.email,
  //   FastName: fastName,
  //   LastName: lastName,
  // };
  // const addTodos = addDoc(usetCollection, data);
  // console.log('0000====>', addTodos);

  useEffect(() => {
    todoRef.orderBy('createAt', 'deac').onSnapshot(querySnapshot => {
      const todos = [];
      querySnapshot.forEach(doc => {
        const {heading} = doc.data();
        todos.push({
          id: doc.id,
          heading,
        });
      });
      setTodos(todos);
    });
  }, []);

  const deletTodo = () => {
    todoRef
      .doc(todos.id)
      .delete()
      .then(() => {
        Alert('Deleted Successfuliy');
      })
      .catch(error => {
        Alert(error);
      });
  };

  const addTodo = () => {
    if (addData && addData.length > 0) {
      timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        heading: addData,
        createAt: timestamp,
      };
      todoRef
        .add(data)
        .then(() => {
          setAddData('');
          Keyboard.dismiss();
        })
        .catch(error => {
          alert(error);
        });
    }
  };
  return (
    // <ScrollView style={{flex: 1}}>
    <View style={styles.main}>
      {/* <StatusBar style="auto" /> */}
      <FlatList
        data={todos}
        numColumns={1}
        renderItem={({item}) => (
          <View>
            <Pressable
              style={styles.container}
              onPress={() => navigation.navigate('detail', {item})}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deletTodo(item)}>
                <Text style={{fontSize: 20, fontWeight: '900'}}>X</Text>
              </TouchableOpacity>
              <View style={styles.innerContainer}>
                <Text style={styles.itemHeading}>
                  {item.heading[0].toUpperCase() + item.heading.slice(1)}
                </Text>
              </View>
            </Pressable>
          </View>
        )}
      />

      <View style={[styles.contnenBody, styles.shado]}>
        <TextInput
          placeholder="Enter Your Task"
          onChangeText={heading => setAddData(heading)}
          style={styles.inputText}
          value={addData}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={styles.addButon} onPress={addTodo}>
          <Text style={{fontSize: 20, justifyContent: 'center', color: '#fff'}}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    margin: 5,
    height: 650,
    alignItems: 'center',
  },
  button: {
    width: '50%',
    marginLeft: 5,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 30,
  },
  shado: {
    shadowColor: '#2B1B17',
    elevation: 30,
  },
  contnenBody: {
    width: '96%',
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'flex-end',
    // flex: 1,
    alignItems: 'flex-end',
  },
  inputText: {
    backgroundColor: '#d9d9d9',
    width: '80%',
    borderRadius: 10,
    fontSize: 18,
  },
  addButon: {
    width: 60,
    height: 50,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  cart: {
    flex: 0.1,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#e6e6e6',
    justifyContent: 'space-between',
  },

  container: {
    backgroundColor: '#e5e5e5',
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 45,
  },
  itemHeading: {
    fontSize: 18,
    marginRight: 22,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'red',
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
