import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FlexBox_A from "./src/FlexBob/FlexBox_A";
import FlexBox_B from "./src/FlexBob/FlexBox_B";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <FlexBox_A /> */}
      <FlexBox_B />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    columnGap: "10px",
  },
});

export default App;
