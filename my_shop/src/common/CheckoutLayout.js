import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CheckoutLayout = ({total, itams}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <Text style={styles.text}>{`[ Itams : ${itams} ]`}</Text>
        <Text style={styles.text}>{'Total : ₹ ' + total}</Text>
      </View>
      <View style={styles.tab}>
        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() => {
            navigation.navigate('Checkouts');
          }}>
          <Text style={{color: '#000', fontWeight: '900', fontSize: 22}}>
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutLayout;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tab: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutBtn: {
    width: '80%',
    height: '60%',
    borderRadius: 10,
    backgroundColor: '#89a9f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
  },
});
