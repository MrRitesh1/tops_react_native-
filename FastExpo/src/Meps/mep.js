import { StatusBar } from "expo-status-bar";
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FileList,
  Text,
  View,
} from "react-native";
import { useState } from "react";

const MepDemo = () => {
  const [refreshig, setRefreshig] = useState(true);

  const [data, setData] = useState([
    { key: 1, item: "Teast 1" },
    { key: 2, item: "Teast 2" },
    { key: 3, item: "Teast 3" },
    { key: 4, item: "Teast 4" },
    { key: 5, item: "Teast 5" },
    { key: 6, item: "Teast 6" },
    { key: 7, item: "Teast 7" },
    { key: 8, item: "Teast 8" },
    { key: 9, item: "Teast 9" },
    { key: 10, item: "Teast 10" },
    { key: 11, item: "Teast 11" },
    { key: 12, item: "Teast 12" },
    { key: 13, item: "Teast 13" },
  ]);

  const onRefesh = () => {
    setRefreshig(false);
    setName([...data, { key: 1, item: "Teast 14" }]);
    setRefreshig(false);
  };
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView
      // refreshControl={
      //   <RefreshControl refreshing={refreshig} onRefresh={onRefesh} />
      // }
      >
        {/* <View style={styles.dataBox}>
        <Text style={styles.text}>Welcome</Text>
      </View> */}

        {data.map((a) => {
          return (
            <View style={styles.dataBox} key={a.key}>
              <Text style={styles.text}>{a.item}</Text>
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
    width: "100%",
    backgroundColor: "#ADD8E6",
  },
  dataBox: {
    backgroundColor: "#fff",
    margin: "3%",
    padding: "2%",
    borderColor: "blue",
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
  },
});

export default MepDemo;
