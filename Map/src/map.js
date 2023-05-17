import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView from 'react-native-maps';
import Placesearch from 'react-native-placesearch';
import DropDownPicker from 'react-native-dropdown-picker';

const MapScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Surat', value: 'surat'},
    {label: 'Bharuch', value: 'bharuch'},
    {label: 'Bhavnagar', value: 'bhavnagar'},
    {label: 'Anand', value: 'anand'},
  ]);

  return (
    <View style={{flex: 1}}>
      {/* <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyB7foU7QDWBagoRUxhY5OvcU6uRHt70PmM',
          language: 'en',
        }}
      /> */}
      {/* <Placesearch
        apikey="AIzaSyB7foU7QDWBagoRUxhY5OvcU6uRHt70PmM" // required *
        SelectedAddress={data => console.log(data)} // required * 
        // onClose={(data)=>console.log(data)}
        // country ="country code" //optional
        // coordinate={true} //optional
        // removeImg = {true} //optional
        // StatusBarColor="Your color code" //option *only for android
        // StatusBarStyle="" //option  default "dark-content" *only for android
        // ContainerBackgroundColor="Your color code" // optional
        // InputContainer = {{'your style goes here'}} //optional
        // MainContainer = {{'your style goes here'}} //optional
        // ListStyle = {{'your style goes here'}} //optional
        // ListTextStyle = {{'your style goes here'}} //optional
        // ListIconStyle = {{'your style goes here'}} //optional
        // ImgStyle = {{'your style goes here'}} //optional
        // Img = {{'your style goes here'}} //optional
        // textInput = {{'your style goes here'}} //optional
        // placeHolder = {{'type any textInput placeholder as you like'}} //optional
      />*/}
      <MapView
        style={styles.mapBody}
        initialRegion={{
          latitude: 23.217020538792852,
          longitude: 70.96287405194316,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>

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
    </View>
  );
};

const styles = StyleSheet.create({
  mapBody: {
    flex: 1,
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

export default MapScreen;
