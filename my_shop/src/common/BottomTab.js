import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Header from './Header';
import Home from '../screen/bottomTab/Home';
import Search from '../screen/bottomTab/Search';
import Wishlist from '../screen/bottomTab/Wishilst';
import Notification from '../screen/bottomTab/Notification';
import User from '../screen/bottomTab/User';
const BottomTabScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Wishlist />
      ) : selectedTab == 3 ? (
        <Notification />
      ) : (
        <User />
      )}
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(0)}>
          {/* <Image
            source={require('../assets/images/home.png')}
            style={styles.bottomTabIcon}
          /> */}
          {selectedTab == 0 ? (
            <View style={styles.selectedBottomTabIcon}>
              <Image
                source={require('../assets/images/home.png')}
                style={[styles.bottomTabIcon, {tintColor: '#fff'}]}
              />
            </View>
          ) : (
            <Image
              source={require('../assets/images/home.png')}
              style={styles.bottomTabIcon}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(1)}>
          {/* <Image
            source={require('../assets/images/search.png')}
            style={styles.bottomTabIcon}
          /> */}
          {selectedTab == 1 ? (
            <View style={styles.selectedBottomTabIcon}>
              <Image
                source={require('../assets/images/search.png')}
                style={[styles.bottomTabIcon, {tintColor: '#fff'}]}
              />
            </View>
          ) : (
            <Image
              source={require('../assets/images/search.png')}
              style={styles.bottomTabIcon}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(2)}>
          {/* <Image
            source={require('../assets/images/heart.png')}
            style={styles.bottomTabIcon}
          /> */}
          {selectedTab == 2 ? (
            <View
              style={[styles.selectedBottomTabIcon, {backgroundColor: 'red'}]}>
              <Image
                source={require('../assets/images/heart.png')}
                style={[styles.bottomTabIcon, {tintColor: '#fff'}]}
              />
            </View>
          ) : (
            <Image
              source={require('../assets/images/heart.png')}
              style={styles.bottomTabIcon}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(3)}>
          {/* <Image
            source={require('../assets/images/notification.png')}
            style={styles.bottomTabIcon}
          /> */}
          {selectedTab == 3 ? (
            <View style={styles.selectedBottomTabIcon}>
              <Image
                source={require('../assets/images/notification.png')}
                style={[styles.bottomTabIcon, {tintColor: '#fff'}]}
              />
            </View>
          ) : (
            <Image
              source={require('../assets/images/notification.png')}
              style={styles.bottomTabIcon}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(4)}>
          {/* <Image
            source={
              selectedTab == 4
                ? require('../assets/images/user-avatar.png')
                : require('../assets/images/user.png')
            }
            style={styles.bottomTabIcon}
          /> */}
          {selectedTab == 4 ? (
            <View style={styles.selectedBottomTabIcon}>
              <Image
                source={require('../assets/images/user.png')}
                style={[styles.bottomTabIcon, {tintColor: '#fff'}]}
              />
            </View>
          ) : (
            <Image
              source={require('../assets/images/user.png')}
              style={styles.bottomTabIcon}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTabScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
  selectedBottomTabIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#4d79ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
  },
});
