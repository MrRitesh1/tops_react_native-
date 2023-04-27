import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import FlexBox_A from "./src/FlexBob/FlexBox_A";
import FlexBox_B from "./src/FlexBob/FlexBox_B";
import Cart from "./src/Button and Props/cart";
import Countar from "./Task/Countar + And -/countar";
import ButtonDemo from "./Task/Button/buttonSet";
import { useState } from "react";
import MepDemo from "./src/Meps/mep";
import FlexBoxTask_A from "./Task/FlexBob/flexBoxTask_a";
import FlexBoxTask_B from "./Task/FlexBob/flexBoxTask_b";

export default function App() {
  const [name, setName] = useState("Doremon");

  return (
    <>
      {/* <ScrollView> */}
      {/* Prectiss....................... */}
      {/* <View style={styles.container}> */}
      {/* <Text>Useing FlexBob</Text>
          <Text>---------------------- Screen 1 -----------------------</Text>
          <FlexBox_A />
          <Text>---------------------- Screen 2 -----------------------</Text>
          <FlexBox_B /> */}
      {/* --------------------------------------------------------------------------------------------- */}
      {/* <Text>Button And Props</Text>
        <Cart name={"Ritesh"} />
        <Cart name={"Jiganesh"} />
        <Cart name={name} hendalPress={() => setName("Welcome")} />
        <Cart buttonHide /> */}
      {/* --------------------------------------------------------------------------------------------- */}
      {/* </View> */}

      {/* Task ......................................................................... */}
      {/* <View style={styles.countar}>
          <Text
            style={{
              fontSize: 20,
              color: "#43302E",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            My-Task App
          </Text>
        </View> */}
      {/* <Countar /> */}
      {/* <ButtonDemo /> */}
      {/* </ScrollView> */}

      {/* <FlexBoxTask_A /> */}
      <FlexBoxTask_B />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E4E2",
    alignItems: "center",
    justifyContent: "center",
    // padding: "5%",
    paddingTop: "10%",
  },
  countar: {
    backgroundColor: "#E5E4E2",
    // borderBottomLeftRadius: "40%",
    // borderBottomRightRadius: "40%",
    padding: "2%",
  },
});
