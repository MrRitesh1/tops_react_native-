import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
const AddFile = () => {
  return (
    <View style={styles.mainBody}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          DocumentPicker.pick({allowMultiSelection: true})
            .then(setResult => console.log(setResult))
            .catch(handleError => console.log(handleError));
        }}>
        <Text style={styles.text}>AddFile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    borderLeftWidth: 5,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderRightWidth: 5,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    width: 100,
    borderColor: 'red',
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
});

export default AddFile;
