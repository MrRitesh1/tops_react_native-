import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import {styles} from '../styleSheet/todoScreen';
import {ScrollView} from 'react-native-gesture-handler';

export const TodoScreen = () => {
  const [addValue, setAddChangeText] = useState('');
  const [todoModalVisible, setTodoModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={[styles.hedarBody, styles.shado]}>
        <Text style={styles.nameText}>TO-DO</Text>
        <TouchableOpacity onPress={() => setTodoModalVisible(true)}>
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
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setTodoModalVisible(!todoModalVisible);
          }}>
          <KeyboardAvoidingView behavior={'height'} style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(20,25,40,0.7)',
                // justifyContent: 'flex-end',
                // paddingHorizontal: 15,
              }}>
              <View style={styles.centeredTodoView}>
                <View style={styles.modalTodoView}>
                  <Text style={{fontSize: 20, fontWeight: '900'}}>TO-DO</Text>
                  <TextInput
                    editable
                    multiline
                    style={{padding: 5, borderWidth: 1, fontSize: 18}}
                    numberOfLines={10}
                    maxLength={500}
                    value={addValue}
                    onChangeText={text => setAddChangeText(text)}
                  />
                  <Text style={{fontWeight: '900', textAlign: 'right'}}>
                    {' '}
                    500
                  </Text>
                  <View style={styles.buttonAddBody}>
                    <Pressable
                      style={[styles.addButton, styles.buttonClose]}
                      onPress={() => setTodoModalVisible(!todoModalVisible)}>
                      <Text style={styles.textStyle}>Add TO-DO</Text>
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
      </Modal>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity
          style={[styles.contenBody, styles.shado]}
          onPress={() => setModalVisible(true)}>
          <Text style={{fontSize: 20, fontWeight: '900'}}>
            Headr : Conten-Name
          </Text>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Image : Conten</Text>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Body : Conten</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
