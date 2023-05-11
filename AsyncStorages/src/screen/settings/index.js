import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import {getUserList} from '../../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import TopBar from '../../components/topBar';

const Settings = ({navigation}) => {
  const {users} = useSelector(state => state.usae);
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(getUserList());
  });
  return (
    <View>
      <TopBar />
      {/* <Text>Welcom To Settings</Text> */}
      <FlatList
        data={users}
        renderItem={({item}) => (
          <TouchableWithoutFeedback onPress={() => navigation.navigate('chat')}>
            <View>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default Settings;
