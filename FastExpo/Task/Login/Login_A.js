import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen_A = () => {
  return (
    <SafeAreaView style={styles.mainBody}>
      <View style={styles.body}>
        <View style={styles.box_A}>
          <View style={styles.cantenat_body}>
            <Text style={styles.bodyTaxtTop}>LOGIN</Text>
          </View>
        </View>
        <View style={styles.cantenatBody}>
          <View style={[styles.cantenat, styles.shado]}>
            <Text style={styles.text}>EMAIL</Text>
            <TextInput style={styles.textInput} placeholder="Email" />
            <Text style={styles.text}>PASSWORD</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.textInput}
              placeholder="Password"
            />
          </View>
        </View>
        <View style={styles.box_B}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={{ fontSize: 18, color: "#fff" }}>LOGIN</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.bodyTaxtBottam}>Don't have account</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainBody: { flex: 1 },
  body: { flex: 1, position: "relative" },
  box_A: { flex: 2.5, justifyContent: "center" },
  box_B: { flex: 1.5, justifyContent: "flex-end", marginBottom: "5%" },
  cantenat_body: {
    flex: 1,
    backgroundColor: "#5fc8ee",
    justifyContent: "center",
  },

  bodyTaxtTop: {
    // margin: 20,
    fontWeight: "600",
    textAlign: "center",
    fontSize: 30,
  },
  cantenatBody: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "45%",
    bottom: "25%",
  },
  cantenat: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    marginLeft: "35%",
    padding: "6%",
  },
  shado: {
    shadowColor: "#2B1B17",
    elevation: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: "#b3b3b3",
    fontSize: 15,
    height: "25%",
    padding: "1%",
    margin: "2%",
    paddingLeft: 10,
    opacity: 0.5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#4d4dff",
  },
  button: {
    marginLeft: "15%",
    marginRight: "15%",
    alignItems: "center",
    backgroundColor: "#ff5050",
    borderRadius: 10,

    padding: 10,
  },
  bodyTaxtBottam: {
    marginTop: "2%",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 17,
    color: "#7300e6",
  },
});

export default LoginScreen_A;
