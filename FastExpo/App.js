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
import ListFollowers from "./Task/ListView_in_map/listFollowers";
import ListPrimary from "./Task/ListView_in_map/listPrimary";
import FileListDemo from "./Task/ListView_in_map/FileLists";
import SectionListDemo from "./Task/ListView_in_map/SectionLists";
import LoginScreen_A from "./Task/Login/Login_A";
import LoginScreen_B from "./Task/Login/Login_B";

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
      {/* <MepDemo /> */}
      {/* </View> */}

      {/* Task ......................................................................... */}

      {/* <ButtonDemo /> */}

      {/* </ScrollView> */}

      {/* <ScrollView>
        <View style={styles.countar}>
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
        </View>
        <Countar />
      </ScrollView> */}

      {/* <ScrollView>
        <View style={{ backgroundColor: "#9AFEFF" }}>
          <ListFollowers />
        </View>
      </ScrollView> */}

      {/* <ScrollView>
        <View style={{ backgroundColor: "#ff5050" }}>
          <ListPrimary />
        </View>
      </ScrollView> */}
      {/* <ScrollView>
        <View style={{ backgroundColor: "#9AFEFF" }}>
          <FileListDemo />
        </View>
      </ScrollView> */}
      {/* <ScrollView>
        <View style={{ backgroundColor: "#9AFEFF" }}>
          <SectionListDemo />
        </View>
      </ScrollView> */}

      {/* <LoginScreen_A /> */}
      <LoginScreen_B />

      {/* <FlexBoxTask_A /> */}
      {/* <FlexBoxTask_B /> */}
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
