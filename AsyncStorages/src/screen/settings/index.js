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
import TopHeader from '../../components/topHeader';

const Settings = ({navigation}) => {
  const {users} = useSelector(state => state.usae);
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(getUserList());
  });
  return (
    <View style={styles.main}>
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
const styles = StyleSheet.create({
  main: {
    // flex: 1,
    // backgroundColor: '#99ff99',
  },
});
export default Settings;
