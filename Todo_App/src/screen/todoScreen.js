import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import {styles} from '../styleSheet/todoScreen';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore/lite';
import {db} from '../../enviroment/config';
export const TodoScreen = () => {
  const [title, setTitle] = useState('');
  const [contentWriting, setContentWriting] = useState('');
  const [todoModalVisible, setTodoModalVisible] = useState(false);
  const [updetModalVisible, setUpdetModalVisible] = useState(false);
  const [shwoData, setShowData] = useState('');

  const addTodo = async () => {
    const useCollection = collection(db, 'todo');
    const data = {
      user_id: await AsyncStorage.getItem('userData'),
      title: title,
      contentWriting: contentWriting,
    };
    const addToDo = await addDoc(useCollection, data);
    console.log('addToDo  ', addToDo);
    setTodoModalVisible(!todoModalVisible);
    getTodo();
  };

  const getTodo = async () => {
    const q = query(
      collection(db, 'todo'),
      where('user_id', '==', await AsyncStorage.getItem('userData')),
    );
    const addToDo = await getDocs(q);
    const todos = [];
    addToDo.forEach(doc => {
      const {title, contentWriting} = doc.data();
      todos.push({
        id: doc.id,
        title,
        contentWriting,
      });
      setShowData(todos);
      console.log(doc.id, '---------->', doc.data());
    });
  };

  const hendaleUpdate = async id => {
    const q = query(
      collection(db, 'todo'),
      where('user_id', '==', await AsyncStorage.getItem('userData')),
    );
    const updateTodo = await updateDoc(doc(db, 'todo', id), {
      title: title,
      contentWriting: contentWriting,
    })
      .then(() => {
        console.log('deta Update');
      })
      .catch(erro => {
        console.log(erro);
      });
    console.log('-----><<<<', updateTodo);
    getTodo();
  };

  const hendaleDelete = async id => {
    const q = query(
      collection(db, 'todo'),
      where('user_id', '==', await AsyncStorage.getItem('userData')),
    );
    const deletToDo = await deleteDoc(doc(db, 'todo', id));
    console.log('-----><<<<', deletToDo);
    getTodo();
  };
  useEffect(() => {
    getTodo();
  }, []);

  console.log('shwoData =>>', shwoData);

  return (
    <>
      <View style={[styles.hedarBody, styles.shado]}>
        <Text style={styles.nameText}>TO-DO</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            shadowColor: 'green',
            padding: 5,
            margin: 6,
            elevation: 10,
            borderRadius: 20,
          }}
          onPress={() => setTodoModalVisible(true)}>
          <Image
            source={require('../assets/images/addTodo.png')}
            style={styles.addTodoicon}
          />
        </TouchableOpacity>
        {/* Add TO-DO Model */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={todoModalVisible}
          // onRequestClose={() => {
          //   Alert.alert('Modal has been closed.');
          //   setTodoModalVisible(!todoModalVisible);
          // }}
        >
          <KeyboardAvoidingView behavior={'height'} style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(20,25,40,0.7)',
                // justifyContent: 'flex-end',
                // paddingHorizontal: 15,
              }}>
              <View style={styles.centeredTodoView}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '900',
                    }}>
                    TO-DO
                  </Text>
                  <TouchableOpacity
                    onPress={() => setTodoModalVisible(!todoModalVisible)}>
                    <Text style={{fontWeight: '900', fontSize: 20}}>X</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.modalTodoView}>
                  <Text style={styles.text}>Title</Text>
                  <TextInput
                    style={{padding: 5, borderWidth: 1, fontSize: 18}}
                    value={title}
                    onChangeText={text => setTitle(text)}
                  />

                  <Text style={styles.text}>Content Writing</Text>
                  <TextInput
                    editable
                    multiline
                    style={{padding: 5, borderWidth: 1, fontSize: 18}}
                    numberOfLines={10}
                    maxLength={500}
                    value={contentWriting}
                    onChangeText={text => setContentWriting(text)}
                  />
                  <Text style={{fontWeight: '900', textAlign: 'right'}}>
                    500
                  </Text>
                  <View style={styles.buttonAddBody}>
                    <Pressable
                      style={[styles.addButton, styles.buttonClose]}
                      onPress={addTodo}>
                      <Text style={styles.textStyle}>Add </Text>
                    </Pressable>
                  </View>
                  {/* <View style={styles.todoContenBody}>
                    <Text style={{fontSize: 20, fontWeight: '900'}}>TO-DO</Text>
                    <TextInput
                      editable
                      multiline
                      style={styles.textInput}
                      numberOfLines={4}
                      maxLength={40}
                    />
                    <View style={styles.buttonBody}>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setTodoModalVisible(!todoModalVisible)}>
                        <Text style={styles.textStyle}>Add TO-DO</Text>
                      </Pressable>
                    </View>
                  </View> */}
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>
      </View>
      {/* <Modal
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
                <View style={styles.todoContenBody}>
                  <Text style={{fontSize: 20, fontWeight: '900'}}>TO-DO</Text>
                  <TextInput style={styles.textInput} />
                  <View style={styles.buttonBody}>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.textStyle}>UPDETE</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.textStyle}>DELETE</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal> */}
      <View style={styles.scrollView}>
        <FlatList
          data={shwoData}
          renderItem={({item}) => {
            return (
              <View style={[styles.contenBody, styles.shado]}>
                <Text style={{fontSize: 20, fontWeight: '900'}}>
                  {item.title}
                </Text>
                <Text style={{fontSize: 16, fontWeight: '600'}}>
                  {item.contentWriting}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    margin: 5,
                  }}>
                  <TouchableOpacity
                    onPress={() => setUpdetModalVisible(true)}
                    style={{
                      marginRight: 15,
                      backgroundColor: '#fff',
                      shadowColor: 'green',
                      padding: 10,
                      elevation: 10,
                      borderRadius: 20,
                    }}>
                    <Image
                      source={require('../assets/images/update.png')}
                      style={{height: 20, width: 20}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => hendaleDelete(item.id)}
                    style={{
                      backgroundColor: '#fff',
                      shadowColor: 'red',
                      padding: 10,
                      elevation: 10,
                      borderRadius: 20,
                    }}>
                    <Image
                      source={require('../assets/images/delete.png')}
                      style={{height: 20, width: 20}}
                    />
                  </TouchableOpacity>
                </View>
                {/* Updete Modal */}
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={updetModalVisible}>
                  <KeyboardAvoidingView behavior={'height'} style={{flex: 1}}>
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: 'rgba(20,25,40,0.7)',
                        // justifyContent: 'flex-end',
                        // paddingHorizontal: 15,
                      }}>
                      <View style={styles.centeredTodoView}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            margin: 10,
                          }}>
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: '900',
                            }}>
                            TO-DO
                          </Text>
                          <TouchableOpacity
                            onPress={() =>
                              setUpdetModalVisible(!updetModalVisible)
                            }>
                            <Text style={{fontWeight: '900', fontSize: 20}}>
                              X
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.modalTodoView}>
                          <Text style={styles.text}>Title</Text>
                          <TextInput
                            style={{padding: 5, borderWidth: 1, fontSize: 18}}
                            value={title}
                            onChangeText={text => setTitle(text)}
                          />

                          <Text style={styles.text}>Content Writing</Text>
                          <TextInput
                            editable
                            multiline
                            style={{padding: 5, borderWidth: 1, fontSize: 18}}
                            numberOfLines={10}
                            maxLength={500}
                            value={contentWriting}
                            onChangeText={text => setContentWriting(text)}
                          />
                          <Text style={{fontWeight: '900', textAlign: 'right'}}>
                            500
                          </Text>
                          <View style={styles.buttonAddBody}>
                            <TouchableOpacity
                              onPress={() => hendaleUpdate(item.id)}
                              style={[styles.addButton, styles.buttonClose]}>
                              <Text style={styles.textStyle}>Update</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </KeyboardAvoidingView>
                </Modal>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};
