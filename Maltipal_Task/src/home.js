import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import DatePickers from './components/datePicker';
import CarouselBody from './components/carousel';
import AddFile from './components/addFile';
const HomeScreen = () => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        {/* <DatePickers /> */}
        <AddFile />
      </View>

      <CarouselBody />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
