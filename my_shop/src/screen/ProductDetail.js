import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Header from '../common/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import CostomButton from '../common/CostomButton';
import {useDispatch} from 'react-redux';
import {addItemToWishList} from '../redux/slices/WishlstSlices';
import {addItemToCart} from '../redux/slices/CartSlices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AskForLoginModule from '../common/LoginModel';

const ProductsDetail = () => {
  const navigation = useNavigation();
  const rout = useRoute();
  const dispath = useDispatch();
  const [qty, setQty] = useState(1);
  const [moduleVisible, setModuleVisible] = useState(false);

  const checkUserStates = async () => {
    let isUserLoggdIn = true;
    const status = await AsyncStorage.getItem('IS_USER_LOOGED_IN');
    if (status == null) {
      isUserLoggdIn = false;
    } else {
      isUserLoggdIn = true;
    }
    return isUserLoggdIn;
  };
  return (
    <View style={styles.container}>
      <Header
        leftIcom={require('../assets/images/left-arrow.png')}
        rightIcon={require('../assets/images/shopping-bag.png')}
        title={'Products Detail'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
        isCart={true}
      />

      <ScrollView>
        <Image source={{uri: rout.params.data.image}} style={styles.banner} />
        <TouchableOpacity
          style={styles.wishlistBtu}
          onPress={() => {
            if (checkUserStates() === true) {
              dispath(addItemToWishList(rout.params.data));
            } else {
              setModuleVisible(true);
            }
          }}>
          <Image
            source={require('../assets/images/love.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <View style={styles.contenBody}>
          <Text style={styles.title}>{rout.params.data.title}</Text>
          <View
            style={{borderBottomWidth: 0.5, marginLeft: 20, marginRight: 20}}
          />
          <Text style={styles.description}>{rout.params.data.description}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
              marginBottom: 30,
              justifyContent: 'space-between',
            }}>
            <View
              style={[
                styles.qtyView,
                {marginLeft: 10, padding: 0, paddingBottom: 5},
              ]}>
              <Text style={styles.price}>₹ {rout.params.data.price}</Text>
            </View>
            <View style={styles.qtyView}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  if (qty > 1) {
                    setQty(qty - 1);
                  }
                }}>
                {/* <Text style={{fontSize: 10, fontWeight: '900'}}>-</Text> */}
                <Image
                  source={require('../assets/images/minus.png')}
                  style={{width: 20, height: 40}}
                />
              </TouchableOpacity>
              <Text style={[styles.qty, styles.button]}>{qty}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setQty(qty + 1);
                }}>
                {/* <Text style={{fontSize: 10, fontWeight: '900'}}>+</Text> */}
                <Image
                  source={require('../assets/images/plus.png')}
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* <View
            style={{borderBottomWidth: 0.5, marginLeft: 20, marginRight: 20}}
          /> */}

          <CostomButton
            style={{
              shadowColor: '#2B1B17',
              elevation: 15,
            }}
            bg={'#89a9f0'}
            title={'Add To Cart'}
            color={'#000'}
            onClick={() => {
              // if (checkUserStates() === true) {
              dispath(
                addItemToCart({
                  category: rout.params.data.category,
                  description: rout.params.data.description,
                  id: rout.params.data.id,
                  image: rout.params.data.image,
                  price: rout.params.data.price,
                  qty: qty,
                  rating: rout.params.data.rating,
                  title: rout.params.data.title,
                }),
              );
              // } else {
              //   setModuleVisible(true);
              // }
            }}
          />
        </View>
      </ScrollView>
      <AskForLoginModule
        moduleVisible={moduleVisible}
        onClickLogin={() => {
          navigation.navigate('Login');
        }}
        onClickSingUp={() => {
          navigation.navigate('SignUp');
        }}
        onClose={() => {
          setModuleVisible(false);
        }}
      />
    </View>
  );
};

export default ProductsDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    margin: 10,
    width: '100%',
    height: 200,
    resizeMode: 'center',
  },
  contenBody: {
    flex: 1,
    padding: 5,
    paddingBottom: 50,
    backgroundColor: '#ffffe6',
  },
  title: {
    fontSize: 22,
    color: '#000',
    fontWeight: '700',
    marginLeft: 20,
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
    marginLeft: 20,
    marginTop: 10,
    marginRight: 20,
  },
  price: {
    // marginTop: 20,
    marginLeft: 20,
    marginRight: 30,
    textAlign: 'right',
    color: '#6583f0',
    fontSize: 25,
    fontWeight: '900',
  },
  wishlistBtu: {
    position: 'absolute',
    right: 20,
    top: 160,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 80 / 2,
    shadowColor: '#2B1B17',
    elevation: 15,
  },
  icon: {
    width: 30,
    height: 30,
  },
  qtyView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginRight: 10,
    width: '45%',
    height: 60,
    padding: 5,
    shadowColor: '#2B1B17',
    elevation: 15,
    borderRadius: 9,
  },
  button: {
    padding: 5,
    // borderWidth: 0.5,
    // width: 30,
    // height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 10,
    backgroundColor: '#fff',
    // shadowColor: '#2B1B17',
    // elevation: 15,
  },

  qty: {
    marginLeft: 10,
    fontSize: 20,
    textAlign: 'center',
  },
});
