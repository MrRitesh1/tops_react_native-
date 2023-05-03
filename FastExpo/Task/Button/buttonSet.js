import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CostamButton from "../../Eliment/CostamButton";

const ButtonDemo = () => {
  return (
    <SafeAreaView style={styles.Body}>
      <View style={styles.buttonBody}>
        <Button title="Resat" color={"red"} />
      </View>
      <View style={styles.buttonBody}>
        <Button title="Set" />
      </View>
      {/* <CostamButton lebal={"Welcom"} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Body: {
    flex: 1,
    flexDirection: "row",
  },
  buttonBody: {
    flex: 1,
    justifyContent: "flex-end",
    width: "50%",
  },
});
export default ButtonDemo;
