import {loadConfig} from 'metro-config';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../../common/Header';
import {useNavigation} from '@react-navigation/native';

const Wishlist = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state.wishlist);
  const [wishlistItem, setWishlistItem] = useState(items.data);

  return (
    <View style={styles.container}>
      <Header title={'Wishlist'} />
      <FlatList
        data={wishlistItem}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.productsItem}
              onPress={() => {
                navigation.navigate('ProductsDetail', {data: item});
              }}>
              <ScrollView>
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
                  <Text style={styles.price}>{'₹ ' + item.price}</Text>
                </View>
              </ScrollView>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Wishlist;
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
});
