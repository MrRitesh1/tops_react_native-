import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Alert, Button} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {NotificationController} from './NotificationController.android';

const App = () => {
  useEffect(() => {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log(
        'Message handled in the background!',
        JSON.stringify(remoteMessage),
      );
    });
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message', JSON.stringify(remoteMessage));
      console.log('remoteMessage', remoteMessage);
    });
    return unsubscribe;
  }, []);

  const checkToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console(fcmToken);
      Alert.alert(fcmToken);
    }
  };

  return (
    <View style={styles.Container}>
      <NotificationController />
      <Text style={styles.paragraph}>Push Notification With Firebase Demo</Text>
      <Button title="Get FCD Token" onPress={() => checkToken()} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default App;
