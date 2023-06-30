import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../common/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import CostomButton from '../common/CostomButton';
import {useDispatch} from 'react-redux';
import {addItemToWishList} from '../redux/slices/WishlstSlices';

const ProductsDetail = () => {
  const navigation = useNavigation();
  const rout = useRoute();
  const dispath = useDispatch();
  return (
    <View style={styles.container}>
      <Header
        leftIcom={require('../assets/images/left-arrow.png')}
        rightIcon={require('../assets/images/shopping-bag.png')}
        title={'Products Detail'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <Image source={{uri: rout.params.data.image}} style={styles.banner} />
      <TouchableOpacity
        style={styles.wishlistBtu}
        onPress={() => {
          dispath(addItemToWishList(rout.params.data));
        }}>
        <Image
          source={require('../assets/images/heart.png')}
          style={styles.icon}
        />
      </TouchableOpacity>

      <View style={styles.contenBody}>
        <Text style={styles.title}>{rout.params.data.title}</Text>
        <View
          style={{borderBottomWidth: 0.5, marginLeft: 20, marginRight: 20}}
        />
        <Text style={styles.description}>{rout.params.data.description}</Text>
        <Text style={styles.price}>₹ {rout.params.data.price}</Text>
        <View
          style={{borderBottomWidth: 0.5, marginLeft: 20, marginRight: 20}}
        />
        <CostomButton
          bg={'#ffff99'}
          title={'Add To Cart'}
          color={'#000'}
          onClick={() => {}}
        />
      </View>
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
    marginTop: 20,
    marginLeft: 20,
    marginRight: 30,
    textAlign: 'right',
    color: 'green',
    fontSize: 25,
    fontWeight: '900',
  },
  wishlistBtu: {
    position: 'absolute',
    right: 10,
    top: 225,
    backgroundColor: '#d6d6c2',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 80 / 2,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
