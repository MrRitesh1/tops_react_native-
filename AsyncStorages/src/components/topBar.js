import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import ProfileImage from '../../assets/image/profileImages/profiles.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TopBar = props => {
  const {Navigation} = props;
  const [data, setData] = useState('');

  const getData = async () => {
    try {
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
      <View style={[styles.mainTopBar, styles.shado]}>
        <View style={[styles.mainTopBarBody, styles.shado]}>
          {/* {console.log(Navigation)} */}
          <TouchableOpacity
            style={styles.ProfileButtons}
            title="profiles"
            // onPress={Navigation.navigate('profiles')}
          >
            <Image source={ProfileImage} style={styles.ProfileImage} />
          </TouchableOpacity>
          <Text style={styles.TopBarText}> {data.name}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  shado: {
    // shadowColor: '#2B1B17',
    // elevation: 20,
  },
  main: {
    // flex: 1,
    backgroundColor: '#99ff99',
  },
  mainTopBar: {
    height: 80,
    padding: 10,
    backgroundColor: '#99ff99',
  },
  mainTopBarBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  ProfileImage: {
    height: 50,
    width: 50,
    marginLeft: 20,
    marginRight: 10,

    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#000',
  },
  TopBarText: {
    marginTop: 10,
    fontWeight: '800',
    fontSize: 23,
  },
});

export default TopBar;
