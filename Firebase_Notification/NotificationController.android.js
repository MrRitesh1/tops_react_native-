import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

export const NotificationController = props => {
  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'channel-id',
      channelName: 'My Channel',
    });
  };
  useEffect(() => {
    createChannel(),
      PushNotification.getChannels(function (id) {
        console.log(id);
      });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      PushNotification.loclNotification({
        message: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
        bigPictureUrl: remoteMessage.notification.android.imageUrl,
        smallIcon: remoteMessage.notification.android.imageUrl,
        channelId: true,
        vibrate: true,
      });
    });
    return unsubscribe;
  }, []);
  return null;
};
