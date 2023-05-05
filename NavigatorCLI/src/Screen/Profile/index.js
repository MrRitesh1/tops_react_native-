import React from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ProfileScrren = ({navigation, route}) => {
  const {name, id} = route.params;
  return (
    <View>
      <Text> Welcome to Profile </Text>
      <Text>{name}</Text>
      <Text>{id}</Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={0.1}
          onPress={() => {
            navigation.setParams({name: 'Welcome', id: id + 1});
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'blue',
            }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScrren;
