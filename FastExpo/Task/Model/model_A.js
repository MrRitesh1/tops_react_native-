import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Model_A = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.body}>
      <Text style={styles.bodyText}>Welcome To Model</Text>
      <Modal
        style={[styles.modelBody]}
        transparent
        visible={visible}
        animationType="slide"
      >
        <View style={styles.modelContenBody}>
          <View style={[styles.modelConten, styles.shado]}>
            <Text style={styles.modelText}>Hello</Text>
            <View style={styles.modelbuttonsBodyConten}>
              <TouchableOpacity
                style={styles.modelButton}
                onPress={() => setVisible(!visible)}
              >
                <Text style={styles.modelButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.buttonsBody}
        onPress={() => setVisible(!visible)}
      >
        <Text style={styles.buttonText} onPress={() => setVisible(true)}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#E5E4E2",
    paddingTop: "11%",
    alignItems: "center",
  },
  bodyText: {
    fontSize: 20,
    fontWeight: "700",
  },
  shado: {
    shadowColor: "#000",
    elevation: 50,
  },
  modelBody: {},
  modelContenBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#fff",
  },
  modelConten: {
    alignItems: "center",
    width: "70%",
    height: "20%",
    padding: "10%",
    // backgroundColor: "#81D8D0",
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  modelText: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: 17,
  },
  modelbuttonsBodyConten: {
    flex: 1,
    justifyContent: "flex-end",
    width: "50%",
  },
  modelButton: {
    backgroundColor: "#fff",
    padding: "3%",
    justifyContent: "flex-end",
    borderRadius: 20,
    borderColor: "#BDF516",
    borderWidth: 1,
  },

  modelButtonText: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: 17,
  },
  buttonsBody: {
    backgroundColor: "#E2F516",
    padding: 10,
    borderRadius: 20,
    borderColor: "#BDF516",
    borderWidth: 1,
    justifyContent: "flex-end",
  },

  buttonText: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: 17,
  },
});
export default Model_A;
