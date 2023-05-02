import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Cart_A = () => {
  const [name, setName] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [DATA, setData] = useState([
    {
      title: "A",
      name: "Chirag",
    },
    {
      title: "B",
      name: "Jiganesh",
    },
    {
      title: "C",
      name: "Jay",
    },
    {
      title: "D",
      name: "Yas",
    },
    {
      title: "E",
      name: "Vivek",
    },
    {
      title: "F",
      name: "Kishan",
    },
  ]);
  return (
    <View style={styles.body}>
      <Text style={styles.bodyText}>Welcome </Text>
      {/* <View style={[styles.carcalComponetBody, styles.shado]}>
        <View style={[styles.carcalComponet, styles.shado]}>
          <Text>+</Text>
        </View>
      </View> */}
      {/* <View style={[styles.carcalComponetBody, styles.shado]}>
        <ScrollView>
          <FlatList
            data={DATA}
            // keyExtractor={(itam, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={[styles.carcalComponet, styles.shado]}>
                <Text>{item.title}</Text>
              </View>
            )}
          />
        </ScrollView>
      </View> */}

      {/* <View style={[styles.boxComponetBody, styles.shado]}>
        <View style={[styles.boxComponet, styles.shado]}>
          <Text>1</Text>
        </View>
      </View> */}
      <Modal
        transparent
        visible={true}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View
          style={{
            // backgroundColor: "red",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "blue",
              height: 200,
              width: 200,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Help</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    // marginTop: "10%",
    paddingTop: "10%",
    backgroundColor: "#DADBDD",
  },
  bodyText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "600",
  },
  shado: {
    shadowColor: "#2B1B17",
    elevation: 20,
  },
  carcalComponetBody: {
    flex: 0.5,
    margin: "2%",
    backgroundColor: "#fff",
  },
  carcalComponet: {
    flex: 1,
    margin: "2%",
    backgroundColor: "#fff",
    width: "20%",
    padding: "3%",
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "#000",
    borderWidth: 0.2,
  },
  boxComponetBody: {
    flex: 3.5,
    backgroundColor: "#fff",
    margin: "2%",
  },
  boxComponet: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Cart_A;
