import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../../common/Header';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const Search = () => {
  const products = useSelector(state => state);
  const [search, setSearch] = useState('');
  const [oldData, setOldData] = useState(products.product.data);
  const [searchedList, setSearchedList] = useState([]);
  const filterData = txt => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(txt.toLowerCase());
    });
    setSearchedList(newData);
  };
  return (
    <View style={styles.container}>
      <Header title={'Search Items'} />
      <View style={styles.searchView}>
        <View style={{flexDirection: 'row', alignContent: 'center'}}>
          <Image
            source={require('../../assets/images/search.png')}
            style={[styles.icon, {alignItems: 'center', marginTop: 10}]}
          />
          <TextInput
            value={search}
            onChangeText={txt => {
              setSearch(txt);
              filterData(txt);
            }}
            placeholder="Search items here..."
            style={[styles.inpuut, {fontSize: 18}]}
          />
        </View>
        {search !== '' && (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              setSearch('');
              filterData('');
            }}>
            <Image
              source={require('../../assets/images/cancels.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={searchedList}
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
                <Text style={styles.price}>{'₹ ' + item.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
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
    borderRadius: 10,
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
    width: '80%',
    marginLeft: 10,
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
