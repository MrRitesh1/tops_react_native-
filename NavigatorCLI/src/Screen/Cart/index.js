import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  FlatList,
  Text,
  View,
} from 'react-native';
import {styles} from './cartCSS';
import ImageBackgrounds from '../../image/images.jpg';
import {DATA} from '../../data/Profile';

const CartScrren = () => {
  const DATA = [
    {
      key: 1,
      name: 'Hello1',
      image: require('../../image/profiles.png'),
    },
    {
      key: 2,
      name: 'Hello2',
      image: require('../../image/profiles.png'),
    },
    {
      key: 3,
      name: 'Hello3',
      image: require('../../image/profiles.png'),
    },
    {
      key: 4,
      name: 'Hello4',
      image: require('../../image/profiles.png'),
    },
    {
      key: 5,
      name: 'Hello5',
      image: require('../../image/profiles.png'),
    },
    {
      key: 6,
      name: 'Hello6',
      image: require('../../image/profiles.png'),
    },
    {
      key: 7,
      name: 'Hello7',
      image: require('../../image/profiles.png'),
    },
    {
      key: 8,
      name: 'Hello8',
      image: require('../../image/profiles.png'),
    },
  ];

  return (
    <View style={styles.minBody}>
      <ImageBackground style={styles.topBody} source={ImageBackgrounds} />

      {/* <View style={styles.sentarBody}></View> */}

      <View style={styles.bottomBody}>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({item}) => (
            <View>
              <View style={styles.profile}>
                {/* <ImageBackground>{item.image}</ImageBackground> */}
                <View style={styles.profileImage}></View>
              </View>
              <View style={styles.profile}>
                <Text style={styles.profileText}>{item.name}</Text>
              </View>
            </View>
          )}
        />
        {/* <Image
          style={styles.profile}
          source={require('../../image/profiles.png')}
        /> */}
        {/* <Text>Hello</Text> */}
      </View>
    </View>
  );
};

export default CartScrren;
