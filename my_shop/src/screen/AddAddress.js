import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import Header from '../common/Header';
import {useDispatch} from 'react-redux';
import {addAddress} from '../redux/slices/AddressSlice';

const AddAddress = ({navigation}) => {
  const [type, setType] = useState(0);
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [address_1, setAddress_1] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');

  const dispath = useDispatch();

  return (
    <View>
      <Header
        leftIcom={require('../assets/images/left-arrow.png')}
        title={'Add Address'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <View>
        <View style={[styles.inputText, styles.shado]}>
          <Image
            source={require('../assets/images/address.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Address 1 "
            value={address_1}
            onChangeText={tex => setAddress_1(tex)}
          />
        </View>
        <View style={[styles.inputText, styles.shado]}>
          <Image
            source={require('../assets/images/address.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="city "
            value={city}
            onChangeText={tex => setCity(tex)}
          />
        </View>
        <View style={[styles.inputText, styles.shado]}>
          <Image
            source={require('../assets/images/address.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Pincode"
            keyboardType={'number-pad'}
            value={pincode}
            onChangeText={tex => setPincode(tex)}
          />
        </View>
        <View style={[styles.inputText, styles.shado]}>
          <Image
            source={require('../assets/images/address.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="State "
            value={state}
            onChangeText={tex => setState(tex)}
          />
        </View>
        <View style={[styles.inputText, styles.shado]}>
          <Image
            source={require('../assets/images/address.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Country "
            value={country}
            onChangeText={tex => setCountry(tex)}
          />
        </View>
        <View style={styles.typeView}>
          <TouchableOpacity
            style={[
              styles.typeBtn,
              {
                borderWidth: 1,
                borderColor: type == 0 ? '#4c72ed' : '#000',
              },
            ]}
            onPress={() => {
              setType(0);
            }}>
            <Image
              source={
                type == 0
                  ? require('../assets/images/radio-butto.png')
                  : require('../assets/images/radio.png')
              }
              style={styles.redio}
            />
            <Text style={styles.redioText}>HOME</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.typeBtn,
              {
                borderWidth: 1.5,
                marginLeft: 10,
                borderColor: type == 1 ? '#6583f0' : '#000',
              },
            ]}
            onPress={() => {
              setType(1);
            }}>
            <Image
              source={
                type == 1
                  ? require('../assets/images/radio-butto.png')
                  : require('../assets/images/radio.png')
              }
              style={styles.redio}
            />
            <Text style={styles.redioText}>OFFICE</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btnBody}>
        <TouchableOpacity
          style={[styles.btn, styles.shado]}
          onPress={() => {
            dispath(
              addAddress({
                address_1: address_1,
                city: city,
                pincode: pincode,
                state: state,
                country: country,
                type: type == 1 ? 'HOME' : 'OFFICE',
              }),
              navigation.goBack(),
            );
          }}>
          <Text style={{fontSize: 23, fontWeight: '900', color: '#000'}}>
            Seva Address
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddAddress;
const styles = StyleSheet.create({
  shado: {
    shadowColor: '#2B1B17',
    elevation: 15,
  },
  inputText: {
    backgroundColor: '#e6f2ff',
    paddingHorizontal: 10,
    margin: 10,
    borderWidth: 1.5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {marginLeft: 5, fontSize: 22, fontWeight: '900'},
  icon: {
    height: 40,
    width: 40,
  },
  btnBody: {justifyContent: 'center', alignItems: 'center'},
  btn: {
    backgroundColor: '#89a9f0',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  typeView: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  typeBtn: {
    width: '40%',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
  },
  redio: {
    width: 24,
    height: 24,
  },
  redioText: {
    marginLeft: 10,
    fontWeight: '800',
    fontSize: 18,
  },
});
