import React, {useEffect, useState} from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './profilesCSS';
import I from '../../../assets/image/profileImages/happy.webp';
const Profiles = ({navigation}) => {
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
    <View style={styles.mainBody}>
      <View style={[styles.min, styles.shado]}>
        <View style={[styles.textView, styles.shado]}>
          <Text
            style={[
              styles.text,
              {
                textAlign: 'center',
                fontSize: 20,

                fontWeight: '800',
              },
            ]}>
            Edit Profile
          </Text>
        </View>
        <View style={[styles.infoBody, styles.shado]}>
          <View style={[styles.profilesBody, styles.shado]}>
            <TouchableOpacity>
              <Image source={I} style={styles.profilesImage} />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <Text style={styles.text}>name </Text>
            <TextInput value={data.name} style={styles.textImput} />
            <Text style={styles.text}>email {data.email}</Text>
            <TextInput value={data.email} style={styles.textImput} />
            <Text style={styles.text}>passwerd {data.passwerd}</Text>
            <TextInput value={data.passwerd} style={styles.textImput} />
          </ScrollView>
        </View>
        <TouchableOpacity
          style={[styles.buttons, styles.shado]}
          title="SignOut"
          onPress={() => navigation.navigate('signUp')}>
          <Text style={styles.buttonsText}>SignOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profiles;
