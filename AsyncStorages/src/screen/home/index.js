import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {styles} from './homeCSS';
import ProfileImage from '../../image/profileImages/profiles.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TopBar from '../../components/topBar';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState('');
  const ProfileData = [
    {
      key: 1,
      name: 'Hello1',
      image: require('../../image/profileImages/Profile.png'),
    },
    {
      key: 2,
      name: 'Hello2',
      image: require('../../image/profileImages/profiles.png'),
    },
    {
      key: 3,
      name: 'Hello3',
      image: require('../../image/profileImages/Profile.png'),
    },
    {
      key: 4,
      name: 'Hello4',
      image: require('../../image/profileImages/profiles.png'),
    },
    {
      key: 5,
      name: 'Hello5',
      image: require('../../image/profileImages/Profile.png'),
    },
    {
      key: 6,
      name: 'Hello6',
      image: require('../../image/profileImages/profiles.png'),
    },
    {
      key: 7,
      name: 'Hello7',
      image: require('../../image/profileImages/Profile.png'),
    },
    {
      key: 8,
      name: 'Hello8',
      image: require('../../image/profileImages/profiles.png'),
    },
  ];

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
      <TopBar />
      <View style={styles.contenBody}>
        <View style={styles.story}>
          <Image source={ProfileImage} style={{height: 70, width: 70}} />
          <Text style={{textAlign: 'center'}}>Helo</Text>
        </View>
        {/* <FlatList
        data={ProfileData}
        renderItem={({data}) => (
          <View style={styles.story}>
             <Image source={ProfileImage} style={{height: 70, width: 70}} />
            <Text>{data}</Text>
          </View>
        )}
       /> */}
      </View>
    </View>
  );
};

export default HomeScreen;
