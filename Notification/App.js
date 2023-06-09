import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import PushNotification from 'react-native-push-notification';

// npm install --save react-native-push-notification
// https://github.com/zo0r/react-native-push-notification

const App = () => {
  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'test',
      channelName: 'Test Channel',
      channelDescription: 'Test Channel Desc.. ',
    });
  };
  useEffect(() => {
    createChannel();
  }, []);

  const hendleNotification = () => {
    PushNotification.localNotification({
      channelId: 'test',
      title: 'Mr_Chat',
      message: 'Hello , Good Morning',
    });
  };
  return (
    <View>
      <Text>Welcom Notification</Text>
      <Button title="Click Me" onPress={hendleNotification} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
