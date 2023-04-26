import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ButtonDemo = () => {
  return (
    <View style={styles.buttonBody}>
      <Button title="Resat" />
      <Button title="Set" />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBody: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default ButtonDemo;
