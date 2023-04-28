import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
} from "react-native";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const FileListDemo = () => {
  const [Itam, setItam] = useState([
    { name: "Amy Sarha" },
    { name: "Chirag Jackos" },
    { name: "Amanda Martin" },
    { name: "Jiganesh Dakhara" },
    { name: "Doremon Sarha" },
    { name: "Jay Pande" },
    { name: "Krutik Jasani" },
    { name: "Vivek Makavana" },
    { name: "Mayur Josi" },
    { name: "Keyur Bhalani" },
    { name: "Ritesh Bodhara" },
    { name: "Haresh Davara" },
  ]);

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <Text style={[styles.hedar, styles.shado]}>FileListDemo</Text>
        {/* <View style={styles.itam}>
          <Text style={styles.text}>Harsh Davara</Text>
        </View> */}

        <FlatList
          // horizontal
          data={Itam}
          // keyExtractor={(itam, index) => index.toString()}
          renderItem={(itam) => {
            return (
              <View style={styles.itam}>
                <Text style={styles.text}>{itam.name}</Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    height: "100%",
    backgroundColor: "#E0FFFF",
    marginTop: "20%",
  },
  hedar: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#9AFEFF",
    padding: "3%",
  },
  shado: {
    shadowColor: "#2B1B17",
    elevation: 10,
  },
  itam: {
    // backgroundColor: "#fff",
    // margin: "3%",
    marginTop: "3%",
    padding: "3%",
    borderColor: "blue",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
  },
});
export default FileListDemo;
