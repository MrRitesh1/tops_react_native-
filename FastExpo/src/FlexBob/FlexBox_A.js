import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const FlexBox_A = () => {
  const [name, setName] = useState("Welcome");
  console.log("useState ==>> ", name);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.camponet}>
        <Text style={[styles.text, styles.color1]}>Home</Text>
        <Text style={[styles.text, styles.color2]}>Wallet</Text>
        <Text style={[styles.text, styles.color3]}>Camera</Text>
        <Text style={[styles.text, styles.color4]}>Phone</Text>
      </View>
      <View style={styles.camponet}>
        <Text style={[styles.text, styles.color5]}>Email</Text>
        <Text style={[styles.text, styles.color6]}>Backup</Text>
        <Text style={[styles.text, styles.color7]}>Person</Text>
        <Text style={[styles.text, styles.color8]}>Notes</Text>
      </View>
      <View style={styles.camponet}>
        <Text style={[styles.text, styles.color9]}>Alarm</Text>
        <Text style={[styles.text, styles.color10]}>Book</Text>
        <Text style={[styles.text, styles.color11]}>Print</Text>
        <Text style={[styles.text, styles.color12]}>Music</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    // columnGap: "10px",
    // backgroundColor: "#DCD0FF",
  },
  camponet: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // textAlign: "center",
    margin: "1%",
  },
  text: {
    // flex: 1,
    display: "flex",
    margin: "3%",
    height: "20%",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 10,
  },
  color1: {
    backgroundColor: "#6D7B8D",
  },
  color2: {
    backgroundColor: "#728FCE",
  },
  color3: {
    backgroundColor: "#95B9C7",
  },
  color4: {
    backgroundColor: "#87CEEB",
  },
  color5: {
    backgroundColor: "red",
  },
  color6: {
    backgroundColor: "#CCFFFF",
  },
  color7: {
    backgroundColor: "#77BFC7",
  },
  color8: {
    backgroundColor: "#7BCCB5",
  },
  color9: {
    backgroundColor: "#617C58",
  },
  color10: {
    backgroundColor: "#E2F516",
  },
  color11: {
    backgroundColor: "#FED8B1",
  },
  color12: {
    backgroundColor: "#9F8C76",
  },
});

export default FlexBox_A;
