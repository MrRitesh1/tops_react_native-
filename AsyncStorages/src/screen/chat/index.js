import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {setEmail, setName, setPasswerd} from '../../redux/actions';
import {useSelector, useDispatch} from 'react-redux';

const Chat = ({navigation}) => {
  const {name, email, passwerd} = useSelector(state => state.usae);
  const dispacth = useDispatch();
  const hendalSubmit = () => {
    dispacth(setName('Ritesh'));
    dispacth(setEmail('ritesh@gmail.com'));
    dispacth(setPasswerd('123@3'));
  };
  return (
    <View style={styles.main}>
      <Text>Welcom To Chat</Text>
      <Text>
        Hwllo ,{name ? name : 'user'} - {email ? email : 'email'}
        {passwerd ? passwerd : 'passwerd'}
      </Text>
      <Button title="Click" onPress={hendalSubmit} />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    // flex: 1,
    // backgroundColor: '#99ff99',
  },
});
export default Chat;
