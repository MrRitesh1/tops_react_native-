import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const CostomButton = ({bg, title, onClick, color}) => {
  return (
    <TouchableOpacity
      style={[styles.btu, {backgroundColor: bg}]}
      activeOpacity={1}
      onPress={() => {
        onClick();
      }}>
      <Text style={{color: color, fontSize: 20, fontWeight: '600'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CostomButton;
const styles = StyleSheet.create({
  btu: {
    width: Dimensions.get('window').width - 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
  },
});
