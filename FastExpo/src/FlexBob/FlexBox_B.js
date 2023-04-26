import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

const FlexBox_B = ({ buttonhide }) => {
  return (
    <View style={styles.body}>
      <StatusBar style="auto" />
      <View style={styles.conten_A}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.conten_B}>
        <View style={styles.conten_Box}>
          <Text style={[styles.box, styles.color1]}>Box 1</Text>
          <Text style={[styles.box, styles.color2]}>Box 2</Text>
          <Text style={[styles.box, styles.color3]}>Box 3</Text>
        </View>
        {/* {buttonhide ? null : <Button title="Clec Me" />} */}

        <View style={styles.conten_Box}>
          <Text style={[styles.box, styles.color4]}>Box 4</Text>
          <Text style={[styles.box, styles.color5]}>Box 5</Text>
          <Text style={[styles.box, styles.color6]}>Box 6</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    // display: "flex",
    width: "100%",
  },
  conten_A: {
    flex: 1,
    // display: "flex",
    // backgroundColor: "#DCD0FF",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  conten_B: {
    flex: 1,
    // display: "flex",
  },
  conten_Box: {
    flex: 1,
    // display: "flex",
    flexDirection: "row",
  },
  box: {
    flex: 1,
    // display: 1,
    justifyContent: "center",
    textAlign: "center",
  },
  color1: {
    backgroundColor: "red",
  },
  color2: {
    backgroundColor: "#E2F516",
  },
  color3: {
    backgroundColor: "#95B9C7",
  },
  color4: {
    backgroundColor: "#52D017",
  },
  color5: {
    backgroundColor: "#C6DEFF",
  },
  color6: {
    backgroundColor: "#F52887",
  },
});

export default FlexBox_B;
