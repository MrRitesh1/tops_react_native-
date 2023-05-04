import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import SignUp from "./Components/Screen/Register/signUp";
import Home from "./Components/Screen/Home/home";
const App = () => {
  return (
    <>
      {/* <SignUp /> */}
      <Home />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
