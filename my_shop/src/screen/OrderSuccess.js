import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OrderSuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.continer}>
      <Image
        source={require('../assets/images/love.png')}
        style={styles.icon}
      />
      <Text style={styles.msg}>Order Placed Successfull...</Text>
      <Text
        onPress={() => {
          navigation.navigate('Main');
        }}>
        Go To Home
      </Text>
    </View>
  );
};

export default OrderSuccess;
const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
  },
  msg: {
    marginTop: 20,
    fontSize: 18,
    color: '#000',
  },
  btn: {
    padding: 10,
    borderRadius: 5,
    color: '#000',
  },
});
