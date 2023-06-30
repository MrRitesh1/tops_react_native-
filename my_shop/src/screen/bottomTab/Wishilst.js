import {loadConfig} from 'metro-config';
import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Wishlist = () => {
  const items = useSelector(state => state.Wishlist);
  console.log(JSON.stringify(items));
  return (
    <View>
      <Text>Wishlist</Text>
    </View>
  );
};

export default Wishlist;
