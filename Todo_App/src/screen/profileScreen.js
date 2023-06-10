import React, {useState, useMemo} from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styleSheet/profileScreen';
import ImagePicker from 'react-native-image-crop-picker';
import I from '../assets/images/pngtree.png';
import RadioGroup from 'react-native-radio-buttons-group';

export const ProfileScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [image,setImage]=useState(I);
  const [mobile, setMobile] = useState('');
  const [profile, setProfile] = useState(null);
  const [editProfile, setEditProfile] = useState('');
  const [selectedId, setSelectedId] = useState();

  const imagePick = () => {
    {
      ImagePicker.openPicker({
        width: 60,
        height: 60,
        cropping: true,
        includeBase64: true,
      }).then(image => {
        console.log(image);
        setProfile(image.path);
      });
    }
  };
  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: 'Male   ',
        value: 'Male1',
      },
      {
        id: '2',
        label: 'Female',
        value: 'Female2',
      },
    ],
    [],
  );
  return (
    <>
      <View style={styles.main}>
        <View style={[styles.logoutButtonBody, styles.shado]}>
          <View style={styles.ProfileBody}>
            {/* <View style={styles.imageProfileBody}>
              <Image
                source={require('../assets/images/pngtree.png')}
                style={styles.imageProfile}
              />
            </View> */}
            <Text style={styles.nameText}>Usar Name</Text>
          </View>
          <TouchableOpacity onPress={() => setEditProfile(true)}>
            <Text
              style={{fontSize: 22, fontWeight: '900', textAlign: 'center'}}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.ProfileContnenBody}>
          <Text style={{fontSize: 22, fontWeight: '900', textAlign: 'center'}}>
            Profile
          </Text>
          <View style={{borderBottomWidth: 1}} />
          <View style={[styles.profilesImageBody, styles.shado]}>
            <Image
              source={require('../assets/images/pngtree.png')}
              style={styles.imageProfile}
            />
          </View>
          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Name</Text>
            <Text style={styles.inputText}>Jiganesh Deshi</Text>
          </View>
          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Email</Text>
            <Text style={styles.inputText}>JD111@email.com</Text>
          </View>
          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Mobile</Text>
            <Text style={styles.inputText}>9911882277</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => navigation.navigate('login')}>
              <Text style={styles.logoutButtonText}>LogOut</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={{borderBottomWidth: 1}} /> */}
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={editProfile}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setEditProfile(!editProfile);
        }}>
        <KeyboardAvoidingView behavior={'height'} style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(20,25,40,0.7)',
              // justifyContent: 'flex-end',
              // paddingHorizontal: 15,
            }}>
            <View style={styles.centeredTodoView}>
              <View style={styles.modalTodoView}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '900',
                    textAlign: 'center',
                  }}>
                  Profile Edit
                </Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    marginLeft: 100,
                    marginRight: 100,
                  }}
                />
                <View style={[styles.profilesImageBody, styles.shado]}>
                  <TouchableOpacity onPress={imagePick}>
                    <Image
                      source={profile ? {uri: profile} : I}
                      style={styles.profilesImageSet}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.inputContnenar}>
                  <Text style={{fontSize: 18, fontWeight: '700'}}>Name</Text>
                  <TextInput style={styles.inputText} placeholder="name" />
                </View>
                <View style={styles.inputContnenar}>
                  <Text style={{fontSize: 18, fontWeight: '700'}}>Email</Text>
                  <TextInput style={styles.inputText} placeholder="email" />
                </View>
                <View style={styles.inputContnenar}>
                  <Text style={{fontSize: 18, fontWeight: '700'}}>Mobile</Text>
                  <TextInput
                    style={styles.inputText}
                    placeholder="mobile numbar"
                  />
                </View>
                <RadioGroup
                  style={{}}
                  radioButtons={radioButtons}
                  onPress={setSelectedId}
                  selectedId={selectedId}
                  layout="row"
                />
                <View style={{alignItems: 'center', marginTop: 15}}>
                  <Pressable
                    style={[styles.addButton, styles.buttonClose]}
                    onPress={() => setEditProfile(!editProfile)}>
                    <Text style={styles.textStyle}>UPDETE</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
};
