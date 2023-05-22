import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const SingUpScreen = () => {
  return (
    <View style={styles.main}>
      <ScrollView style={[styles.contentMainBody, styles.shado]}>
        <View style={[styles.contentHedar, styles.shado]}>
          <Text style={{fontSize: 25, fontWeight: '700'}}>Welcome</Text>
        </View>
        <View style={styles.contentBody}>
          <TextInput style={styles.info} placeholder="Name" />
          <TextInput style={styles.info} placeholder="Email ID" />
          <TextInput style={styles.info} placeholder="Mobil Numbar" />
          <TextInput style={styles.info} placeholder="DOB" />
          <TextInput style={styles.info} placeholder="Address" />
          <TextInput style={styles.info} placeholder="Passwerd" />

          <TouchableOpacity
            style={styles.buttons}
            title="SignIn"
            onPress={console.log('ok')}>
            <Text style={styles.buttonsText}>SignIn</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  shado: {
    shadowColor: '#2B1B17',
    elevation: 10,
  },
  main: {
    height: '100%',
    backgroundColor: '#fff',
  },
  contentMainBody: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#ccffff',
    marginBottom: 50,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 40,
    // padding: 15,
  },
  contentHedar: {
    flex: 0.4,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  contentBody: {
    flex: 4.6,
    justifyContent: 'center',
  },
  info: {
    height: 40,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    // marginLeft: 10,
    // marginRight: 10,
    margin: 12,
    // borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: '#000',
    fontSize: 18,
    padding: 10,
    fontWeight: '600',
  },
  buttons: {
    backgroundColor: '#fff',
    // flex: 0.2,
    borderRadius: 20,
    // margin: 15,
    display: 'flex',
    marginLeft: 100,
    width: '50%',
  },
  buttonsText: {
    color: '#000',
    fontSize: 20,
    padding: 10,
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default SingUpScreen;
