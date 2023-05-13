import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from './homeCSS';
import ProfileImage from '../../../assets/image/profileImages/profiles.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState('');

  const getData = async () => {
    try {
      // const data = await AsyncStorage.getItem('name', 'email', 'passwerd');
      const respos = await AsyncStorage.getItem('userData');

      setData(JSON.parse(respos));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.main}>
      <View style={[styles.mainTopHeader]}>
        <View style={[styles.mainTopHeaderBody, styles.shado]}>
          <TouchableOpacity
            style={styles.ProfileButtons}
            title="profiles"
            onPress={() => navigation.navigate('profiles')}>
            <Image source={ProfileImage} style={styles.ProfileImage} />
          </TouchableOpacity>
          <Text style={styles.TopHeaderText}> {data.name}</Text>
        </View>
      </View>
      <View style={styles.contenBody}></View>
    </View>
  );
};

export default HomeScreen;
