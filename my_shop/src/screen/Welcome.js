import React, {useEffect, useRef} from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';

const Welcome = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 3000);
  });
  return (
    <View style={styles.man}>
      <View style={styles.textContnen}>
        <Image
          source={require('../assets/images/pngwing.coms.png')}
          style={styles.imageText}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  man: {
    flex: 1,
    backgroundColor: '#89a9f0',
  },
  textContnen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    width: '100%',
    height: 370,
  },
});
