import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('home');
    }, 5000);
  });

  return (
    <View>
      <Text>Welcom</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WelcomeScreen;
