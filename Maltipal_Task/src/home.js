import React, {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DatePickers from './components/datePicker';
import CarouselBody from './components/carousel';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      {/* <DatePickers /> */}
      <CarouselBody />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
