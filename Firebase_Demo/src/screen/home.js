import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
});

export default HomeScreen;
