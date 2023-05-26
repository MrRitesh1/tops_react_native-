import React, {useEffect, useState} from 'react';
import {Button, TextInput, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatePickers from './components/datePicker';
import CarouselBody from './components/carousel';
import AddFile from './components/addFile';
const HomeScreen = () => {
  const [data, setData] = useState('');
  const getData = async () => {
    try {
      const respos = await AsyncStorage.getItem('userData');

      setData(JSON.parse(respos));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        {/* <DatePickers /> */}
        <AddFile />
      </View>

      <CarouselBody />

      <Text style={styles.text}>name </Text>
      <TextInput value={data.name} style={styles.textImput} />
      <Text style={styles.text}>passwerd </Text>
      <TextInput value={data.passwerd} style={styles.textImput} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
