import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./Components/Screen/home";
import SignUp from "./Components/Screen/Register/signUp";
const App = () => {
  return (
    <>
      <SignUp />
      <Home />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
