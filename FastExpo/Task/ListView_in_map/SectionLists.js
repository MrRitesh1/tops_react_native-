import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { RefreshControl, ScrollView, SectionList } from "react-native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const SectionListDemo = () => {
  const data = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
  ];

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <Text style={[styles.hedar, styles.shado]}>SectionListDemo</Text>

        <SectionList
          // horizontal
          sections={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itam}>
              <Text style={styles.text}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <View style={[styles.itam, styles.itamHedars]}>
              <Text style={{ fontSize: 25, color: "#fff" }}>
                {section.title}
              </Text>
            </View>
          )}
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

  itamHedars: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  text: {
    fontSize: 20,
  },
});
export default SectionListDemo;
