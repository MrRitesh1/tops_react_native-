import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import Header from '../common/Header';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  emptyCart,
  reduceItemFromCart,
  removeItemFromCart,
} from '../redux/slices/CartSlices';
import CostomButton from '../common/CostomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RazorpayCheckout from 'react-native-razorpay';
import {orderItem} from '../redux/slices/OrderSlices';
const Checkouts = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state.cart);
  const [cartItem, setCartItem] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState(0);
  const isFocused = useIsFocused();
  const [selectedAddress, setSelectedAddress] = useState(
    'Please Select Address',
  );

  const dispatch = useDispatch();
  useEffect(() => {
    setCartItem(items.data);
  }, [items]);
  const getTotal = () => {
    let total = 0;
    cartItem.map(item => {
      total = total + item.qty * item.price;
    });
    return total.toFixed(0);
  };
  useEffect(() => {
    getSelectedAddress();
  }, []);

  const getSelectedAddress = async () => {
    setSelectedAddress(await AsyncStorage.getItem('MY_ADDRESS'));
  };

  const orderPlace = paymentId => {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    console.log();
    const data = {
      items: cartItem,
      amount: '₹ ' + getTotal(),
      address: selectedAddress,
      paymentId: paymentId,
      paymentStatus: selectedMethod == 3 ? 'Pending' : 'Success',
      createdAt:
        day + '/' + month + '/' + year + ' :: ' + hours + ' : ' + minutes,
    };

    dispatch(orderItem(data));
    dispatch(emptyCart([]));

    navigation.navigate('OrderSuccess');
  };
  const payNow = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_hKEvVbnoGv26xA', // Your api key
      amount: getTotal() * 100,
      name: 'Pay',
      prefill: {
        email: 'riteshnavadiya111@gmail.com',
        contact: '9913554368',
        name: 'Razorpay Software',
      },
      theme: {color: '#6583f0'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        alert(`Success: ${data.razorpay_payment_id}`);
        orderPlace(data.razorpay_payment_id);
      })
      .catch(error => {
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  return (
    <View style={styles.container}>
      <Header
        leftIcom={require('../assets/images/left-arrow.png')}
        title={'Checkout'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.titelBody}>
        <Text style={styles.titel}>Added Items</Text>
      </View>
      <ScrollView>
        <View>
          <FlatList
            data={cartItem}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.productsItem}
                  onPress={() => {
                    navigation.navigate('ProductsDetail', {data: item});
                  }}>
                  <Image
                    source={{uri: item.image}}
                    style={{height: 80, width: 80}}
                  />
                  <View>
                    <Text style={styles.name}>
                      {item.title.length > 20
                        ? item.title.substring(0, 20) + '...'
                        : item.title}
                    </Text>
                    <Text style={styles.description}>
                      {item.description.length > 30
                        ? item.description.substring(0, 30) + '...'
                        : item.description}
                    </Text>
                    <View style={styles.qtyView}>
                      <Text style={styles.price}>{'₹ ' + item.price}</Text>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                          if (item.qty > 1) {
                            dispatch(reduceItemFromCart(item));
                          } else {
                            dispatch(removeItemFromCart(index));
                          }
                        }}>
                        <Text style={{fontSize: 10, fontWeight: '900'}}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.qty}>{item.qty}</Text>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                          dispatch(addItemToCart(item));
                        }}>
                        <Text style={{fontSize: 10, fontWeight: '900'}}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.paymentBody}>
          <View style={styles.totalView}>
            <Text style={{fontSize: 20, fontWeight: '900', color: '#000'}}>
              Total
            </Text>
            <Text style={{fontSize: 25, fontWeight: '900', color: '#000'}}>
              {'₹ ' + getTotal()}
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#6583f0',
              marginTop: 10,
              marginBottom: 10,
            }}
          />
          <Text style={{fontSize: 20, fontWeight: '900', color: '#000'}}>
            Select Payment Mode
          </Text>
          <TouchableOpacity
            style={styles.paymentMethod}
            onPress={() => {
              setSelectedMethod(0);
            }}>
            <Image
              source={
                selectedMethod == 0
                  ? require('../assets/images/radios.png')
                  : require('../assets/images/radio.png')
              }
              style={[
                styles.img,
                {tintColor: selectedMethod == 0 ? '#6583f0' : '#000'},
              ]}
            />
            <Text style={styles.paymentMethodText}>Credit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentMethod}
            onPress={() => {
              setSelectedMethod(1);
            }}>
            <Image
              source={
                selectedMethod == 1
                  ? require('../assets/images/radios.png')
                  : require('../assets/images/radio.png')
              }
              style={[
                styles.img,
                {tintColor: selectedMethod == 1 ? '#6583f0' : '#000'},
              ]}
            />
            <Text style={styles.paymentMethodText}>Debit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentMethod}
            onPress={() => {
              setSelectedMethod(2);
            }}>
            <Image
              source={
                selectedMethod == 2
                  ? require('../assets/images/radios.png')
                  : require('../assets/images/radio.png')
              }
              style={[
                styles.img,
                {tintColor: selectedMethod == 2 ? '#6583f0' : '#000'},
              ]}
            />
            <Text style={styles.paymentMethodText}>UPI</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentMethod}
            onPress={() => {
              setSelectedMethod(3);
            }}>
            <Image
              source={
                selectedMethod == 3
                  ? require('../assets/images/radios.png')
                  : require('../assets/images/radio.png')
              }
              style={[
                styles.img,
                {tintColor: selectedMethod == 3 ? '#6583f0' : '#000'},
              ]}
            />
            <Text style={styles.paymentMethodText}>Cash on Delivery</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addressBody}>
          <View style={styles.addressView}>
            <Text style={styles.titel}>Address</Text>
            <Text
              style={[
                styles.titel,
                {
                  color: 'green',
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  paddingLeft: 10,
                  paddingRight: 10,
                  shadowColor: '#2B1B17',
                  elevation: 10,
                },
              ]}
              onPress={() => {
                navigation.navigate('Address');
              }}>
              Edit Address
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#6583f0',
              marginTop: 15,
              marginBottom: 10,
            }}
          />
          <Text style={{color: '#000', fontSize: 20}}>{selectedAddress}</Text>
        </View>
      </ScrollView>

      <CostomButton
        bg={'#6583f0'}
        title={'Pay & Order'}
        color={'#fff'}
        onClick={() => {
          payNow();
        }}
      />
    </View>
  );
};

export default Checkouts;
const styles = StyleSheet.create({
  shado: {
    shadowColor: '#2B1B17',
    elevation: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 15,
  },
  titel: {
    fontSize: 22,
    fontWeight: '900',
    // marginTop: 30,
    // marginLeft: 20,
    color: '#000',
  },
  titelBody: {
    backgroundColor: '#fff',
    width: 200,
    marginTop: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2B1B17',
    elevation: 10,
    marginLeft: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  productsItem: {
    // width: Dimensions.get('window').width,
    height: 120,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    shadowColor: '#2B1B17',
    elevation: 10,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    paddingBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: '900',
    marginLeft: 20,
  },
  description: {
    marginLeft: 20,
  },
  price: {
    marginLeft: 20,
    color: 'red',
    fontSize: 18,
    fontWeight: '700',
  },
  qtyView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderWidth: 0.5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 10,
  },
  qty: {
    marginLeft: 10,
    fontSize: 20,
  },
  paymentBody: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    paddingBottom: 20,
    borderRadius: 10,
    shadowColor: '#2B1B17',
    elevation: 10,
  },
  totalView: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  paymentMethod: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 20,
    paddingLeft: 20,
  },
  img: {
    width: 24,
    height: 24,
  },
  paymentMethodText: {
    marginLeft: 15,
    fontSize: 18,
    color: '#000',
  },
  addressBody: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#2B1B17',
    elevation: 10,
    // height: '100%',
    // marginBottom: 50,
  },
  addressView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
