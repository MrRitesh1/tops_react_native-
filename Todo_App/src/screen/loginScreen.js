import React, {useState} from 'react';

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
export const LoginScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
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
      <ScrollView>
        <View style={styles.contenBody}>
          <Text style={{fontSize: 25, fontWeight: '900', marginBottom: 20}}>
            Login
          </Text>

          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Email</Text>
            <TextInput style={styles.inputText} />
          </View>
          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Password</Text>
            <TextInput style={styles.inputText} />
          </View>
          <TouchableOpacity
            style={{alignItems: 'flex-end'}}
            onPress={() => setModalVisible(true)}>
            <Text>Forgot your password? </Text>
          </TouchableOpacity>
          <View style={styles.buttonBody}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('home')}>
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
