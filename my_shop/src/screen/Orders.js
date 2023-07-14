import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../common/Header';
import {useSelector} from 'react-redux';

const Order = () => {
  const navigation = useNavigation();
  const OrdersList = useSelector(state => state.order);

  return (
    <View style={styles.container}>
      <Header
        leftIcom={require('../assets/images/left-arrow.png')}
        title={'Orders'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <View style={{marginBottom: 20}} />
      <FlatList
        data={OrdersList.data}
        renderItem={({item, index}) => {
          return (
            <View style={styles.orderItem}>
              <Text
                style={{
                  textAlign: 'right',
                  fontWeight: '800',
                  marginBottom: 4,
                  marginRight: 5,
                }}>
                {item.createdAt}
              </Text>

              <FlatList
                data={item.items}
                renderItem={({item, index}) => {
                  return (
                    <View style={styles.productItem}>
                      <Image
                        source={{uri: item.image}}
                        style={styles.itemImage}
                      />
                      <View>
                        <Text style={{fontSize: 18, fontWeight: '700'}}>
                          {item.title.length > 25
                            ? item.title.substring(0, 25) + '...'
                            : item.title}
                        </Text>
                        <Text>
                          {item.description.length > 35
                            ? item.description.substring(0, 35) + '...'
                            : item.description}
                        </Text>

                        <Text style={{fontSize: 18, fontWeight: '700'}}>
                          {'Rs. ' + item.price}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
              <View style={styles.totalBody}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={[styles.totalText, {color: 'red'}]}>
                  {item.amount}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Order;
const styles = StyleSheet.create({
  shado: {
    shadowColor: '#2B1B17',
    elevation: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  orderItem: {
    width: '90%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    // marginTop: 20,
    shadowColor: '#2B1B17',
    elevation: 15,
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  productItem: {
    width: '100%',
    // height: 50,
    alignSelf: 'center',
    backgroundColor: '#ff',
    // borderWidth: 1,
    marginBottom: 10,
    flexDirection: 'row',
  },
  itemImage: {
    width: 50,
    height: 50,
    margin: 5,
    marginRight: 10,
    borderRadius: 3,
  },
  totalBody: {
    borderTopWidth: 1,
    borderColor: '#80ccff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    fontWeight: '800',
    marginBottom: 4,
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});
