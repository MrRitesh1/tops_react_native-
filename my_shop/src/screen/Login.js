import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.mainBody}>
      <View style={styles.boxBody}>
        <View style={styles.box_a}>
          {/* <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: '#fff',
              fontWeight: '900',
            }}>
            Login
          </Text> */}
          <Image
            style={styles.loginImage}
            source={require('../assets/images/Account-Login-Button-PNG-Clipart.png')}
          />
        </View>
      </View>
      <View style={styles.box_b}></View>
      <View style={styles.contenBody}>
        <View style={styles.hedarText}>
          <Text style={{fontSize: 25, fontWeight: '900', margin: 10}}>
            Login to your Account
          </Text>
        </View>
        <ScrollView>
          <View style={[styles.inputText, styles.shado]}>
            <Image
              source={require('../assets/images/usera.png')}
              style={styles.icon}
            />
            <TextInput style={styles.input} placeholder="Email" />
          </View>
          <View style={[styles.inputText, styles.shado]}>
            <Image
              source={require('../assets/images/padlock.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="password"
            />
          </View>
          <View style={[styles.botBodyL, styles.shado]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Main')}
              style={{flexDirection: 'row'}}>
              {/* <Image
                source={require('../assets/images/login-.png')}
                style={{height: 40, width: 50}}
              /> */}
              <Text
                style={{
                  color: '#000',
                  fontSize: 30,
                  textAlign: 'center',
                  fontWeight: '900',
                }}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              textAlign: 'center',
              marginTop: 40,
              fontWeight: '900',
              fontSize: 18,
            }}>
            -- Or SignIn With --
          </Text>
          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              style={[
                styles.shado,
                {
                  backgroundColor: '#fff',
                  borderRadius: 50,
                  marginTop: 5,
                },
              ]}>
              <Image
                source={require('../assets/images/google.png')}
                style={{height: 50, width: 50, margin: 10}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.shado,
                {
                  backgroundColor: '#fff',
                  borderRadius: 50,
                  marginTop: 5,
                  marginLeft: 40,
                },
              ]}>
              <Image
                source={require('../assets/images/facebook.png')}
                style={{height: 50, width: 50, margin: 10}}
              />
            </TouchableOpacity>

            {/* <TouchableOpacity>
              <Image
                source={require('../assets/images/linkedin.png')}
                style={{height: 50, width: 50, margin: 10}}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require('../assets/images/twitter.png')}
                style={{height: 50, width: 50, margin: 10}}
              />
            </TouchableOpacity> */}
          </View>
          <View style={[styles.botBodyR, styles.shado]}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 16,
                  textAlign: 'center',
                  fontWeight: '700',
                }}>
                Don't have an Account? SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  shado: {
    shadowColor: '#2B1B17',
    elevation: 10,
  },
  mainBody: {
    flex: 1,
    backgroundColor: '#89a9f0',
  },
  box: {
    backgroundColor: 'red',
  },
  contenBody: {
    flex: 1,
    // top: '30%',
    backgroundColor: '#fff',
    margin: 10,
    // marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#2B1B17',
    elevation: 20,
  },
  boxBody: {
    position: 'relative',
    alignItems: 'flex-end',
  },
  box_a: {
    height: 70,
    width: 200,
    backgroundColor: '#4d79ff',
    shadowColor: '#2B1B17',
    elevation: 10,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginImage: {
    width: 170,
    height: 60,
    justifyContent: 'center',
  },
  box_b: {
    height: 150,
    width: 150,
    backgroundColor: '#4d79ff',
    shadowColor: '#2B1B17',
    elevation: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  inputText: {
    backgroundColor: '#e6f2ff',
    paddingHorizontal: 10,
    margin: 10,
    borderWidth: 1.5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {marginLeft: 5, fontSize: 22, fontWeight: '900'},
  icon: {
    height: 30,
    width: 30,
  },
  botBodyL: {
    flex: 1,
    backgroundColor: '#89a9f0',
    width: 300,
    height: 50,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {},
  botBodyR: {
    flex: 1,
    backgroundColor: '#89a9f0',
    width: 320,
    height: 30,
    left: 90,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
});
