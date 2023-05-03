import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen_B = () => {
  return (
    <SafeAreaView style={styles.mainBody}>
      <View style={styles.body}>
        <Text style={styles.bodyText}>My App</Text>

        <View style={styles.info}>
          <Text style={styles.info_text}>Welcome</Text>
          <TextInput style={styles.textInput} placeholder=" User" />
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder=" Password"
          />
          {/* <View style={styles.button}>
            <Button color={"#ff1a75"} title="LOGIN" />
          </View> */}
          <TouchableOpacity>
            <View style={styles.button}>
              <Text>LOGIN</Text>
            </View>
          </TouchableOpacity>
          <TouchableHighlight>
            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                margin: "5%",
                fontSize: 15,
                color: "#cc3333",
              }}
            >
              Forget Password ?
            </Text>
          </TouchableHighlight>
          <View style={styles.socialmedia}>
            <TouchableOpacity>
              <Text style={[styles.info_text, styles.colorGoogle]}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.info_text, styles.colorFacebook]}>
                Facebook
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: "15%",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "800",
                opacity: 0.6,
              }}
            >
              Create a New account ?
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "#cc3333" }}> SingUp</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottamDizin}>
          <View style={styles.bottamDizinL}></View>

          <View
            style={[
              { borderTopLeftRadius: Platform.OS == "ios" ? 350 : 150 },
              styles.bottamDizinR,
            ]}
          ></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen_B;
const styles = StyleSheet.create({
  mainBody: { flex: 1 },
  body: {
    flex: 1,
  },
  bodyText: {
    marginTop: "20%",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
    fontStyle: "italic",
    color: "#4d6600",
  },
  info: {
    justifyContent: "center",
    padding: "5%",
  },
  info_text: {
    fontSize: 25,
    fontWeight: "800",
    opacity: 0.5,
    marginTop: "10%",
  },
  textInput: {
    backgroundColor: "#DADBDD",
    fontSize: 18,
    height: "10%",
    padding: "1.5%",
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 15,
    opacity: 0.3,
  },
  button: {
    marginTop: "5%",
    marginLeft: "2%",
    marginRight: "2%",
    alignItems: "center",
    backgroundColor: "#aa80ff",
    borderRadius: 10,
    padding: 10,
  },
  socialmedia: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  colorGoogle: {
    color: "#cc3333",
  },
  colorFacebook: {
    color: "#3359cc",
  },
  bottamDizin: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  bottamDizinL: {
    height: 70,
    width: 100,
    justifyContent: "flex-end",
    // borderTopRightRadius: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: Platform.OS == "ios" ? 150 : 100,
    backgroundColor: "#ff884d",
  },
  bottamDizinR: {
    height: 150,
    width: 150,
    // borderTopLeftRadius: 150,

    backgroundColor: "#ffbb99",
  },
});
