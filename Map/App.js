import React, {useState} from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import DropDownPicker from 'react-native-dropdown-picker';
const App = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Surat', value: 'surat', latitude: 21.1702, longitude: 72.8311},
    {label: 'Bharuch', value: 'bharuch'},
    {label: 'Bhavnagar', value: 'bhavnagar'},
    {label: 'Anand', value: 'anand'},
  ]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView
        style={styles.mapBody}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={styles.contenBody}>
        <Text>Welcome To React Native Map </Text>
        <DropDownPicker
          style={styles.DropDown}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mapBody: {
    flex: 2,
    width: '100%',
  },
  contenBody: {
    flex: 1,
    margin: 10,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  DropDown: {
    marginTop: 20,
    backgroundColor: '#d6d6c2',
    fontSize: 20,
  },
});

export default App;
