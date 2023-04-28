import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const ListFollowers = () => {
  const [refreshig, setRefreshig] = useState(false);
  const [name, setName] = useState([
    { key: 1, FName: "Amy", LName: "Sarha" },
    { key: 2, FName: "Chirag", LName: "Jackos" },
    { key: 3, FName: "Amanda", LName: "Martin" },
    { key: 4, FName: "Jiganesh", LName: "Dakhara" },
    { key: 5, FName: "Doremon", LName: "Sarha" },
    { key: 6, FName: "Jay", LName: "Pande" },
    { key: 7, FName: "Krutik", LName: "Jasani" },
    { key: 8, FName: "Vivek", LName: "Makavana" },
    { key: 9, FName: "Mayur", LName: "Josi" },
    { key: 10, FName: "Keyur", LName: "Bhalani" },
    { key: 11, FName: "Ritesh", LName: "Bodhara" },
    { key: 12, FName: "Haresh", LName: "Davara" },
  ]);

  const onRefesh = () => {
    setRefreshig(true);
    setName([...name, { key: 1, FName: "Ritesh", LName: "Navadiya" }]);
    setRefreshig(false);
  };
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshig} onRefresh={onRefesh} />
        }
      >
        <Text style={[styles.hedar, styles.shado]}>Followers</Text>
        <View style={styles.itam}>
          <Text style={styles.text}>Harsh Davara</Text>
          <Button
            color={"#E30B5D"}
            title="Follow"
            onPress={() => setName(console.log(name))}
          />
        </View>

        {name.map((a) => {
          return (
            <View style={styles.itam} key={a.key}>
              <Text style={styles.text}>{a.FName + a.LName}</Text>
              <Button
                color={"#E30B5D"}
                title="Follow"
                //   onPress={() => setName(console.log(a.FName + a.LName))}
              />
            </View>
          );
        })}
        {/* <FlatList
          renderItem={
            <View style={styles.itam} key={a.key}>
              <Text style={styles.text}>{a.FName + a.LName}</Text>
              <Button
                color={"#E30B5D"}
                title="Follow"
                //   onPress={() => setName(console.log(a.FName + a.LName))}
              />
            </View>
          }
        /> */}
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
export default ListFollowers;
