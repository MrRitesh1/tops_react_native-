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
import ProfileImage from '../../../assets/image/profileImages/profiles.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TopHeader from '../../components/topHeader';
import TopTabs from '../../components/topTab';

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
      <TopHeader
      // Navigation={navigation}
      />
      <View style={styles.contenBody}>
        {/* <View style={[styles.contenTab, styles.shado]}>
          <TouchableOpacity onPress={() => navigation.navigate('chat')}>
            <Text>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('status')}>
            <Text>Status</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('calls')}>
            <Text>Calls</Text>
          </TouchableOpacity>
        </View> */}
      </View>
      {/* <View style={styles.story}>
          <Image source={ProfileImage} style={{height: 70, width: 70}} />
          <Text style={{textAlign: 'center'}}>Helo</Text>
        </View> */}
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
  );
};

export default HomeScreen;
