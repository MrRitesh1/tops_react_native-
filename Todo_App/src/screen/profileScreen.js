import React, {useState, useMemo, useEffect} from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Pressable,
  Button,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styleSheet/profileScreen';
import ImagePicker from 'react-native-image-crop-picker';
import I from '../assets/images/pngtree.png';
import RadioGroup from 'react-native-radio-buttons-group';
import {auth, db, storage} from '../../enviroment/config';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore/lite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import {applyActionCode} from 'firebase/auth';
import {launchImageLibrary} from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
export const ProfileScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [image,setImage]=useState(I);
  const [mobile, setMobile] = useState('');
  const [profile, setProfile] = useState();
  const [editProfile, setEditProfile] = useState('');
  const [selectedId, setSelectedId] = useState();
  const [user, setUser] = useState();
  const [shwoData, setShowData] = useState('');

  useEffect(() => {
    const ReaData = async () => {
      const docRef = doc(db, 'user', auth.currentUser.uid);
      const docSnap = await getDocs(docRef);

      const userInfo = [];
      docSnap.forEach(doc => {
        const {name, email} = doc.data();
        todos.push({
          id: doc.id,
          name,
          email,
        });
        setShowData(userInfo);
        console.log(doc.id, '---------->', doc.data());
      });
      // console.log('docSnap', docSnap);
      // if (docSnap.exists()) {
      //   setName(docSnap.data().Name);
      //   setMobile(docSnap.data().Mobile);
      //   setEmail(docSnap.data().Email);
      // }
    };
    ReaData();
    console.log('name :', name);
  }, []);

  const LogOut = () => {
    firebase
      .auth(auth)
      .signOut()
      .catch(error => {
        Alert.alert(error, 'Error in logout');
      });
  };

  // const getUsarInfo = async () => {
  //   const users = await firestore().collection('Users').get();
  //   const user = await firestore()
  //     .collection('Users')
  //     .doc(await AsyncStorage.getItem('userData'))
  //     .get();

  // const userInfo = firebase
  //   .firestore()
  //   .collection('user')
  //   .get()
  //   .then(snapshot => {
  //     let data = snapshot.val();
  //     let item = Object.values(data);
  //     this.setUser({item});
  //   })
  //   .catch(function (error) {
  //     var errorCode = error.code;
  //     var errorMassage = error.massage;
  //     this.setUser({errorMassage: errorMassage});
  //   });
  // console.log('userInfo --$', userInfo);
  // };

  // const imagePick = () => {
  //   ImagePicker.openPicker({
  //     width: 60,
  //     height: 60,
  //     cropping: true,
  //     includeBase64: true,
  //   })
  //     .then(async image => {
  //       try {
  //         setProfile(image);
  //         const imageName = image.path.substring(
  //           image.path.lastIndexOf('/') + 1,
  //         );
  //         const bucketFile = `image/${imageName}`;
  //         const pathToFile = image.path;
  //         // console.log('imageName', imageName);
  //         // console.log('bucketFile', bucketFile);
  //         // console.log('pathToFile', pathToFile);

  //         // const fileSet = await storage().ref(imageName).putFile(pathToFile);
  //         // const url = await storage().ref(bucketFile).getDownloadURL();
  //         // console.log('fileSet', fileSet);
  //         // console.log('image url', url);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   //.then(image => {
  //   //   setProfile(image.path);
  //   //   const fileName =
  //   //     image.path.split('/')[image.path.split('/').length - 1];
  //   //   const imageRef = ref(storage, 'user/' + fileName);

  //   //   const meta = {
  //   //     contentType: image.mime,
  //   //   };

  //   //   uploadBytesResumable(imageRef, image.path, meta)
  //   //     .then(snapshot => {
  //   //       getDownloadURL(snapshot.ref)
  //   //         .then(url => console.log('File available at', url))
  //   //         .catch(error => console.log('URL', error));
  //   //     })
  //   //     .catch(err => console.log('Image', err));
  //   // });
  // };

  const pickImage = () => {
    launchImageLibrary({quality: 0.5}, fileobj => {
      setProfile(fileobj.path);
      const fileName = fileobj;
      const imageRef = ref(storage, 'user/' + fileName.assets);
      const meta = {
        contentType: fileobj.assets,
      };
      console.log('url 3 -$', meta.contentType);

      // uploadBytesResumable(imageRef, fileobj.path, meta)
      //   .then(snapshot => {
      //     getDownloadURL(snapshot.ref)
      //       .then(url => console.log('File available at', url))
      //       .catch(error => console.log('URL', error));
      //   })
      //   .catch(err => console.log('Image', err));

      // const uploadTask = storage()
      // .ref()
      // .child(`/userprofile ${Date.now()}`)
      // .putFile(fileobj.uri);
      // uploadTask.on(
      //   'state_changed',
      //   snapshot => {
      //     const progress =
      //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //     // console.log('Upload is ' + progress + '% done');
      //     if (progress == 100) Alert.alert('image uploaded');
      //   },
      //   error => {
      //     Alert.alert('error image uploaded');
      //   },
      //   () => {
      //     getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
      //       console.log('File available at', downloadURL);
      //       setProfile(downloadURL);
      //     });
      //   },
      // );
    });
  };

  // const radioButtons = useMemo(
  //   () => [
  //     {
  //       id: '1',
  //       label: 'Male   ',
  //       value: 'Male1',
  //     },
  //     {
  //       id: '2',
  //       label: 'Female',
  //       value: 'Female2',
  //     },
  //   ],
  //   [],
  // );
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
            <Text style={styles.inputText}>jiganesh@email.com</Text>
          </View>
          <View style={styles.inputContnenar}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Mobile</Text>
            <Text style={styles.inputText}>9911882277</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.logoutButton} onPress={LogOut}>
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
                  {/* <TouchableOpacity onPress={imagePick}>
                    <Image
                      source={{uri: profile?.path}}
                      style={styles.profilesImageSet}
                    />
                  </TouchableOpacity> */}
                  <TouchableOpacity onPress={() => pickImage()}>
                    <Text>Image</Text>
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
                {/* <RadioGroup
                  style={{}}
                  radioButtons={radioButtons}
                  onPress={setSelectedId}
                  selectedId={selectedId}
                  layout="row"
                /> */}
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
