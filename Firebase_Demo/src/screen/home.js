import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {auth} from '../../enviroment/config';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreen = () => {
  console.log('=============>', auth.currentUser);
  return (
    <View style={styles.main}>
      <View style={[styles.contnenBody, styles.shado]}>
        <TextInput placeholder="add" style={styles.inputText} />
        <TouchableOpacity style={styles.addButon}>
          <Text style={{fontSize: 20, justifyContent: 'center'}}>Add</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>{auth.currentUser.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  shado: {
    shadowColor: '#2B1B17',
    elevation: 30,
  },
  contnenBody: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 20,
    flexDirection: 'row',
  },
  inputText: {
    backgroundColor: '#d9d9d9',
    width: '80%',
  },
  addButon: {
    width: 60,
    height: 50,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

export default HomeScreen;
