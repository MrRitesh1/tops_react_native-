import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Header from '../common/Header';
import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Address = ({navigation}) => {
  const addressList = useSelector(state => state.address);
  const isFocused = useIsFocused();
  const dispath = useDispatch();
  useEffect(() => {
    console.log('AddressList', addressList);
  }, [isFocused]);

  const defaulAddress = async item => {
    await AsyncStorage.setItem(
      'MY_ADDRESS',
      '' +
        item.address_1 +
        ',' +
        item.city +
        ',' +
        item.pincode +
        ',' +
        item.state +
        ',' +
        item.country +
        ', Type : ' +
        item.type,
    );
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Header
        leftIcom={require('../assets/images/left-arrow.png')}
        title={'Edit Address'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddAddress', {type: 'new'});
        }}>
        <Image
          source={require('../assets/images/contact.png')}
          style={styles.addAddressImg}
        />
      </TouchableOpacity>
      <FlatList
        data={addressList.data}
        renderItem={({item, index}) => {
          return (
            <ScrollView>
              <TouchableOpacity
                style={styles.contenBody}
                onPress={() => {
                  defaulAddress(item);
                }}>
                <View
                  style={{
                    borderRadius: 10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 10,
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      borderRadius: 10,
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 10,
                      flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('AddAddress', {
                          type: 'edit',
                          data: item,
                        });
                      }}>
                      <Image
                        source={require('../assets/images/pen.png')}
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        dispath(defaulAddress(item.id));
                      }}>
                      <Image
                        source={require('../assets/images/delet.png')}
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#5f99f5',
                      padding: 5,
                      borderRadius: 10,
                      width: 150,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 10,
                      flexDirection: 'row',
                    }}>
                    {/* <Text style={styles.textHedar}>Type</Text> */}

                    <Text style={styles.textHedar}>{item.type}</Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: '#e6f2ff',
                    paddingBottom: 10,
                    paddingTop: 10,
                    paddingLeft: 10,
                    borderRadius: 10,
                  }}>
                  <Text style={styles.textHedar}>Lokesan</Text>
                  <Text style={styles.tex}>{item.address_1}</Text>
                </View>

                <View style={styles.textBody}>
                  <View style={styles.textConten}>
                    <Text style={styles.textHedar}>City</Text>
                    <Text style={styles.tex}>{item.city}</Text>
                  </View>
                  <View style={styles.textConten}>
                    <Text style={styles.textHedar}>Pincode </Text>
                    <Text style={styles.tex}>{item.pincode}</Text>
                  </View>
                </View>
                <View style={styles.textBody}>
                  <View style={styles.textConten}>
                    <Text style={styles.textHedar}>State</Text>
                    <Text style={styles.tex}>{item.state}</Text>
                  </View>
                  <View style={styles.textConten}>
                    <Text style={styles.textHedar}>Country</Text>
                    <Text style={styles.tex}>{item.country}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          );
        }}
      />
    </View>
  );
};

export default Address;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 15,
  },
  addAddressImg: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 0,
    right: -1,
    margin: 4,
  },
  icon: {height: 32, width: 32, marginRight: 10},
  contenBody: {
    width: '90%',
    backgroundColor: '#fff',
    // borderWidth: 1,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#2B1B17',
    elevation: 10,
  },
  textBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHedar: {
    fontSize: 20,
    fontWeight: '900',
    color: '#000',
  },
  textConten: {
    backgroundColor: '#e6f2ff',
    marginTop: 10,
    borderRadius: 10,
    // margin: 10,
    paddingLeft: 10,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: 5,
    paddingTop: 5,
  },
  tex: {
    fontSize: 18,
    fontWeight: '600',
  },
});
