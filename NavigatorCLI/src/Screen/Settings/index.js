import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SettingsScrren = ({navigation, route}) => {
  const {data} = route.params;
  return (
    <View>
      <Text> Welcome to Settings </Text>
      {data.map(a => {
        return (
          <View>
            <Text>{a.id}</Text>
            <Text>{a.name}</Text>
          </View>
        );
      })}

      <FlatList
        data={data}
        renderItem={a => (
          <View>
            <Text>{a.id}</Text>
            <Text>{a.name}</Text>
          </View>
        )}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={0.1}
          onPress={() => {
            navigation.setParams({});
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

export default SettingsScrren;
