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

export const AddTodo = () => {
  const [todoModalVisible, setTodoModalVisible] = useState(false);

  return (
    <>
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
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.todoContenBody}>
                  <Text style={{fontSize: 20, fontWeight: '900'}}>TO-DO</Text>
                  <TextInput style={styles.textInput} />
                  <View style={styles.buttonBody}>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setTodoModalVisible(!todoModalVisible)}>
                      <Text style={styles.textStyle}>Add TO-DO</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
};
