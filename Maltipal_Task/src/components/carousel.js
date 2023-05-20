import React, {useRef} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {cartData} from '../data/carouselData';
const CarouselBody = () => {
  const carouselRef = useRef();

  return (
    <View style={styles.carouselBody}>
      <Carousel
        ref={carouselRef}
        data={cartData}
        layout={'tinder'}
        // layout={'stack'}
        // layout={'default'}
        renderItem={({item, index}) => (
          <View style={[styles.slide, styles.shado]}>
            <Image source={item.image} style={styles.image} />
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
    elevation: 10,
  },
  carouselBody: {
    alignItems: 'center',
  },
  slide: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    height: '70%',
    margin: 10,
  },
  image: {
    height: 200,
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default CarouselBody;
