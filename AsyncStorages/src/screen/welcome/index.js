import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Images from '../../image/welcomeScreen/chatA.png';
import ImagesA from '../../image/welcomeScreen/chat.png';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.mainBody}>
      <ImageBackground source={Images} style={{height: 400}} />
      <ImageBackground source={ImagesA} style={{flex: 1}} />
      <View style={styles.buttonsBody}>
        <TouchableOpacity
          style={[styles.buttons, styles.shado]}
          title="SignOut"
          onPress={() => navigation.navigate('signUp')}>
          <Text style={styles.buttonsText}>Get Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainBody: {flex: 1, backgroundColor: '#e6e6e6'},
  shado: {
    shadowColor: '#2B1B17',
    elevation: 20,
  },
  buttonsBody: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99ff99',
    height: 50,
    width: 200,

    borderRadius: 100,
  },
  buttonsText: {
    fontSize: 20,
    fontWeight: '700',
  },
});
export default Welcome;
