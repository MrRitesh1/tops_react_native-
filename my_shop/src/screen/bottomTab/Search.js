import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../../common/Header';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const Search = () => {
  const products = useSelector(state => state);
  console.log(JSON.stringify(products.product.data));
  return (
    <View style={styles.container}>
      <Header title={'Search Items'} />
      <View style={styles.searchView}>
        <View>
          <Image
            source={require('../../assets/images/search.png')}
            style={styles.icon}
          />
          <TextInput placeholder="Search items here..." style={styles.inpuut} />
        </View>
        <TouchableOpacity style={styles.icon}>
          <Image
            source={require('../../assets/images/cancels.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchView: {
    width: '90%',
    height: 50,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    borderWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'center',
  },
  inpuut: {
    width: '60%',
  },
});
