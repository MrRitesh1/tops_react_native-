import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  View,
} from 'react-native';
import I from '../../../assets/image/profileImages/happy.webp';
import {ProfileData} from '../../../assets/data/profilData';

const StatusScreen = ({navigation}) => {
  return (
    <View style={[styles.min]}>
      {/* <FlatList
        data={ProfileData}
        renderItem={({data}) => (
          <View style={[styles.statusBody, styles.shado]}>
            <TouchableOpacity>
              <Image source={data.image} style={styles.statusImage} />
            </TouchableOpacity>
            <Text style={styles.statusText}>{data.name}</Text>
          </View>
        )}
      /> */}
      <ScrollView>
        {ProfileData.map(data => {
          return (
            <View style={[styles.statusBody, styles.shado]} key={data.key}>
              <TouchableOpacity>
                <Image source={data.image} style={styles.statusImage} />
              </TouchableOpacity>
              <Text style={styles.statusText}>{data.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  min: {
    flex: 1,
  },
  shado: {
    shadowColor: '#2B1B17',
    elevation: 30,
  },
  statusBody: {
    marginLeft: 10,
    marginRight: 10,
    margin: 5,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  statusImage: {
    height: 60,
    width: 60,
    backgroundColor: '#C0C0C0',
    borderRadius: 50,
    padding: 4,
  },
  statusText: {
    fontSize: 20,
    // flex: 1,
    marginLeft: 20,
    marginTop: 20,
  },
});
export default StatusScreen;
