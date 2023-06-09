import React, {useEffect, useRef} from 'react';

import {View, Text, Image} from 'react-native';
import {styles} from '../styleSheet/welcomeScreen';

export const WelcomeScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('login');
    }, 3000);
  });
  return (
    <View style={styles.man}>
      <View style={styles.textContnen}>
        <Image
          source={require('../assets/images/welcomes.png')}
          style={styles.imageText}
        />
      </View>
    </View>
  );
};
