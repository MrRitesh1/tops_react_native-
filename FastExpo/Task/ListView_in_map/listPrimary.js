import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const ListPrimary = () => {
  const [refreshig, setRefreshig] = useState(false);
  const [name, setName] = useState([
    {
      key: 1,
      name: "Amy Sarha",
      info: "hjgdd jeuwy uuyjhjd jhw",
      descripsan: "hd jhge jgehe hegje hjhg jhjh",
    },
    {
      key: 2,
      name: "Chirag Jackos",
      info: "hjgdd fg ujhjd jhw",
      descripsan: "hd jhge jgehe hegje hjhg jhjh",
    },
    {
      key: 3,
      name: "Amanda Martin",
      info: "hjgdd gjwy uuyyj fhw",
      descripsan: "hd jhge jgehe hegje hjhg jhjh",
    },
    {
      key: 4,
      name: "Jiganesh Dakhara",
      info: "hfhgd jeuwy fjhjd jhw",
      descripsan: "hd jhge jgehe hegje hjhg jhjh",
    },
    {
      key: 5,
      name: "Doremon Sarha",
      info: "hjgdd jeuwy uuyjhjd jhw",
      descripsan: "hd jhge jgehe hegje hjhg jhjh",
    },
    {
      key: 6,
      name: "Jay Pande",
      info: "hjgdd jeggf uuyjhjd jhw",
      descripsan: "hd jhge jgehe hegje hjhg jhjh",
    },
    {
      key: 7,
      name: "Krutik Jasani",
      info: "hjgdd jfgheuwy uuyjhjd jhw",
      descripsan: "hd jhge jgehe hegje hjhg jhjh",
    },
    {
      key: 8,
      name: "Vivek Makavana",
      info: "hjgdd jeuwy uuyjhjd jhw",
      descripsan: "hd jhge jgehe hegje hjhg jhjh",
    },
    {
      key: 9,
      name: "Mayur Josi",
      info: "hjgdd jeuwy uuyjhjd jhw",
      descripsan: "hd jhge jgehe hegje hjhg jhjh",
    },
    {
      key: 10,
      name: "Keyur Bhalani",
      info: "hjgdd jeuwy uuyjhjd jhw",
      descripsan: "hd jhge jgehe hegje hjhg jhjh",
    },
    {
      key: 11,
      name: "Ritesh Bodhara",
      info: "hjgdd jeuwy uuyjhjd jhw",
      descripsan: "hd jhge jgehe hegje hjhg jhjh",
    },
    {
      key: 12,
      name: "Haresh Davara",
      info: "hjgdd jeuwy uuyjhjd jhw",
      descripsan: "hd jhge jgehe hegje hjhg jhjh",
    },
  ]);

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <Text style={[styles.hedar, styles.shado]}>Primary</Text>
        <View style={styles.itam}>
          <Text style={styles.text_name}>Harsh Davara</Text>
          <Text style={styles.text_info}>af fejhk jewkjf lkwej3ijekl </Text>
          <Text style={styles.text_descripsan}>
            nfek jekljek klewfjel lkejwfkj ljfwekjl kfjk
          </Text>
        </View>
        {name.map((a) => {
          return (
            <View style={styles.itam} key={a.key}>
              <Text style={styles.text_name}>{a.name}</Text>
              <Text style={styles.text_info}>{a.info}</Text>
              <Text style={styles.text_descripsan}>{a.descripsan}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: "10%",
  },
  hedar: {
    flex: 1,
    backgroundColor: "#ff5050",
    padding: "3%",
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
  },
  shado: {
    shadowColor: "#2B1B17",
    elevation: 20,
  },
  itam: {
    // backgroundColor: "#fff",
    // margin: "3%",
    margin: "2%",
    padding: "3%",
    borderColor: "#CFECEC",
    borderWidth: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  text_name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text_info: {
    fontSize: 17,
  },
  text_descripsan: {
    fontSize: 14,
    opacity: 0.5,
  },
});
export default ListPrimary;
