import React from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../styleSheet/singUpScreen';

export const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.man}>
      <Image
        source={require('../assets/images/signup.jpg')}
        style={{
          width: 250,
          height: 250,
          marginLeft: 50,
          marginBottom: 5,
        }}
      />
      <ScrollView>
        <View style={styles.contenBody}>
          <Text style={{fontSize: 25, fontWeight: '900', marginBottom: 20}}>
            Sign-Up
          </Text>

          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Name</Text>
            <TextInput style={styles.inputText} />
          </View>
          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Mobile</Text>
            <TextInput style={styles.inputText} />
          </View>
          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Email</Text>
            <TextInput style={styles.inputText} />
          </View>
          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Password</Text>
            <TextInput style={styles.inputText} />
          </View>
          <View style={styles.buttonBody}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('login')}>
              <Text style={{fontSize: 20, fontWeight: '900'}}>Sign-Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <TouchableOpacity style={{alignItems: 'flex-end'}}>
          <Text>Already have an account ? </Text>
        </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
};
