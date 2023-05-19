import React, {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DatePickers from './components/datePicker';
import Carousel from 'react-native-snap-carousel';
const HomeScreen = () => {
  const carouselRef = useRef();

  return (
    <View>
      <Text>Home Screen</Text>
      {/* <DatePickers /> */}
      <Carousel
        ref={carouselRef}
        data={[
          {
            title: 'Hello',
          },
          {
            title: 'World',
          },
          {
            title: 'Hello',
          },
          {
            title: 'World',
          },
        ]}
        layout={'tinder'}
        renderItem={({item, index}) => (
          <View style={[styles.slide, styles.shado]}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        sliderWidth={350}
        itemWidth={350}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shado: {
    shadowColor: '#2B1B17',
    elevation: 30,
  },

  slide: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    height: '50%',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default HomeScreen;
