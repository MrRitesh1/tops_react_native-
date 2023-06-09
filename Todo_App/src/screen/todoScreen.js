import React from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styleSheet/todoScreen';
import {ScrollView} from 'react-native-gesture-handler';

export const TodoScreen = () => {
  return (
    <>
      <View style={[styles.hedarBody, styles.shado]}>
        <Text style={styles.nameText}>TO-DO</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.contenBody, styles.shado]}>
          <Text style={{fontSize: 20, fontWeight: '900'}}>
            Headr : Conten-Name
          </Text>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Image : Conten</Text>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Body : Conten</Text>
        </View>
        <View style={[styles.contenBody, styles.shado]}>
          <Text style={{fontSize: 20, fontWeight: '900'}}>
            Headr : Conten-Name
          </Text>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Body : Conten</Text>
        </View>
        <View style={[styles.contenBody, styles.shado]}>
          <Text style={{fontSize: 20, fontWeight: '900'}}>
            Headr : Conten-Name
          </Text>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Body : Conten</Text>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Image : Conten</Text>
        </View>
        <View style={[styles.contenBody, styles.shado]}>
          <Text style={{fontSize: 20, fontWeight: '900'}}>
            Headr : Conten-Name
          </Text>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Body : Conten</Text>
        </View>
        <View style={[styles.contenBody, styles.shado]}>
          <Text style={{fontSize: 20, fontWeight: '900'}}>
            Headr : Conten-Name
          </Text>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Body : Conten</Text>
        </View>
        <View style={[styles.contenBody, styles.shado]}>
          <Text style={{fontSize: 20, fontWeight: '900'}}>
            Headr : Conten-Name
          </Text>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Body : Conten</Text>
        </View>
        <View style={[styles.contenBody, styles.shado]}>
          <Text style={{fontSize: 20, fontWeight: '900'}}>
            Headr : Conten-Name
          </Text>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Body : Conten</Text>
        </View>
        <View style={[styles.contenBody, styles.shado]}>
          <Text style={{fontSize: 20, fontWeight: '900'}}>
            Headr : Conten-Name
          </Text>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Body : Conten</Text>
        </View>
        <View style={[styles.contenBody, styles.shado]}>
          <Text style={{fontSize: 20, fontWeight: '900'}}>
            Headr : Conten-Name
          </Text>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Body : Conten</Text>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Image : Conten</Text>
        </View>
        <View style={[styles.contenBody, styles.shado]}>
          <Text style={{fontSize: 20, fontWeight: '900'}}>
            Headr : Conten-Name
          </Text>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Body : Conten</Text>
        </View>
        <View style={[styles.contenBody, styles.shado]}>
          <Text style={{fontSize: 20, fontWeight: '900'}}>
            Headr : Conten-Name
          </Text>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Body : Conten</Text>
        </View>
      </ScrollView>
    </>
  );
};
