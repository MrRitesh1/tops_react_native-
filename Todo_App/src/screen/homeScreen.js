import React from 'react';

import {View, Text, TouchableOpacity, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styleSheet/homeScreen';
import {useNetInfo} from '@react-native-community/netinfo';

export const HomeScreen = ({navigation}) => {
  const netinfo = useNetInfo();
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.main}>
        <Text style={{fontSize: 30, fontWeight: '900'}}>
          HomeScreen{netinfo.type}
          {console.log(netinfo.isConnected)}
        </Text>

        <TouchableOpacity onPress={() => Linking.openURL('tel:9913554368')}>
          <Text>Coll</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
