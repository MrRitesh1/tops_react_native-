import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { RefreshControl, ScrollView, SectionList } from "react-native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const SectionListDemo = () => {
  const data = [
    {
      titale: "Fast",
      batter: [" id: 1001", "type: Regular"],
    },
    {
      titale: "Secand",
      topping: ["id: 5001", "type: None", "type: Glazed"],
    },
  ];

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <Text style={[styles.hedar, styles.shado]}>SectionListDemo</Text>
        <View style={styles.itam}>
          <Text style={styles.text}>Harsh Davara</Text>
        </View>
        <SectionList
          keyExtractor={(item, index) => index.toString()}
          sections={data}
          renderItem={({ item }) => {
            return (
              <View style={styles.itam}>
                <Text style={styles.text}>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => {
            return (
              <View style={styles.itam}>
                <Text style={styles.text}>{section.titale}</Text>
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
export default SectionListDemo;
