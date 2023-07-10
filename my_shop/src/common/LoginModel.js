import React from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import CostomButton from './CostomButton';

const AskForLoginModule = ({
  moduleVisible,
  onClickLogin,
  onClickSingUp,
  onClose,
}) => {
  return (
    <Modal visible={moduleVisible} transparent>
      <View style={styles.moduleView}>
        <View style={styles.mainView}>
          {/* <CostomButton bg={'#b3ffff'} /> */}
          <TouchableOpacity
            style={[styles.btn, styles.shado, {marginTop: 60}]}
            onPress={() => {
              onClickLogin();
            }}>
            <Text style={styles.btnText}>{'Login'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.shado]}
            onPress={() => {
              onClickSingUp();
            }}>
            <Text style={styles.btnText}>{'Create Account'}</Text>
          </TouchableOpacity>
          <View style={[styles.clearBtn, styles.shado]}>
            <TouchableOpacity
              onPress={() => {
                onClose();
              }}>
              <Image
                source={require('../assets/images/cancel.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AskForLoginModule;
const styles = StyleSheet.create({
  shado: {
    shadowColor: '#2B1B17',
    elevation: 15,
  },
  moduleView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mainView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 300,
    width: '90%',
    marginBottom: 50,
  },
  btn: {
    width: '86%',
    height: 70,
    alignSelf: 'center',
    backgroundColor: '#89a9f0',
    marginTop: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  clearBtn: {
    position: 'absolute',
    top: 10,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
