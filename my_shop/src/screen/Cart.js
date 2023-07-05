import {loadConfig} from 'metro-config';
import React, {useState, useEffect} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Header from '../common/Header';
import {
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
} from '../redux/slices/CartSlices';

const Cart = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state.cart);
  const [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setCartItem(items.data);
  }, [items]);
  return (
    <View style={styles.container}>
      <Header
        title={'Cart'}
        //    isCart={true}
      />
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
                  {item.title.length > 25
                    ? item.title.substring(0, 25) + '...'
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
  );
};

export default Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBlockColor: '#fff',
  },
  productsItem: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
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
});
