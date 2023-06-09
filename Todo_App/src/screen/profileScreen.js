import React from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styleSheet/profileScreen';

export const ProfileScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.main}>
        <View style={[styles.logoutButtonBody, styles.shado]}>
          <View style={styles.ProfileBody}>
            <View style={styles.imageProfileBody}>
              <Image
                source={require('../assets/images/pngtree.png')}
                style={styles.imageProfile}
              />
            </View>
            <Text style={styles.nameText}>Usar Name</Text>
          </View>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => navigation.navigate('login')}>
            <Text style={styles.logoutButtonText}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
