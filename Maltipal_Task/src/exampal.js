import React, {useRef} from 'react';
import {
  Animated,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ExampalScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.fadingText}>Welcom To Fading View</Text>
      </Animated.View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.buttonBody, {backgroundColor: 'green'}]}
          onPress={fadeIn}>
          <Text style={styles.buttonText}>Fade In View</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonBody, {backgroundColor: 'red'}]}
          onPress={fadeOut}>
          <Text style={styles.buttonText}>Fade Out View</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#d6d6c2',
    height: '50%',
    width: '90%',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  buttonBody: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default ExampalScreen;
