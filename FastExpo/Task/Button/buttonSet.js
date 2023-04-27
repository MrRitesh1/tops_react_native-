import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ButtonDemo = () => {
  return (
    <View style={styles.Body}>
      <View style={styles.buttonBody}>
        <Button title="Resat" color={"red"} />
      </View>
      <View style={styles.buttonBody}>
        <Button title="Set" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Body: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonBody: {
    width: "50%",
  },
});
export default ButtonDemo;
