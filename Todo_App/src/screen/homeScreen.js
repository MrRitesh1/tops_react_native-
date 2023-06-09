import React from 'react';

import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styleSheet/homeScreen';

export const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.main}>
        <Text style={{fontSize: 30, fontWeight: '900'}}>HomeScreen</Text>
      </View>
    </ScrollView>
  );
};
