import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../../common/Header';
import {useNavigation} from '@react-navigation/native';

const User = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header title={'Profile'} />
      <Image
        source={require('../../assets/images/users.png')}
        style={styles.userImage}
      />
      <Text style={styles.name}>{'Ritesh'}</Text>
      <Text style={[styles.name, {fontSize: 18, marginTop: 0}]}>
        {'riteshnavadiya@gmail.com'}
      </Text>

      <TouchableOpacity style={[styles.tab, {marginTop: 40}]}>
        <Text style={styles.btnText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, {marginTop: 20}]}
        onPress={() => navigation.navigate('Order')}>
        <Text style={styles.btnText}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, {marginTop: 20}]}
        onPress={() => navigation.navigate('Address')}>
        <Text style={styles.btnText}>Address</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, {marginTop: 20}]}>
        <Text style={styles.btnText}>Payment Methods</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, {marginTop: 20}]}>
        <Text style={styles.btnText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default User;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 40,
  },
  name: {
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 24,
    fontWeight: '800',
  },
  tab: {
    width: '90%',
    height: 50,
    // borderBottomWidth: 0.6,
    alignSelf: 'center',
    backgroundColor: '#66b3ff',
    paddingLeft: 20,
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#2B1B17',
    elevation: 10,
  },
  btnText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
});
