import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

const FlexBoxTask_A = () => {
  return (
    <View style={styles.body}>
      <View style={styles.conten_A}>
        <Text>Box 1</Text>
        <View style={styles.conten_Box_body}>
          <View style={styles.conten_Box}>
            <Text style={[styles.box, styles.color1]}>Box 1</Text>
            <Text style={[styles.box, styles.color1]}>Box 2</Text>
            <Text style={[styles.box, styles.color1]}>Box 3</Text>
            <Text style={[styles.box, styles.color4]}>Box 4</Text>
          </View>
          <View style={styles.conten_Box}>
            <Text style={[styles.box, styles.color5]}>Box 1</Text>
            <Text style={[styles.box, styles.color4]}>Box 2</Text>
            <Text style={[styles.box, styles.color1]}>Box 3</Text>
          </View>
          <View style={styles.conten_Box}>
            <Text style={[styles.box, styles.color4]}>Box 1</Text>
            <Text style={[styles.box, styles.color5]}>Box 2</Text>
            <Text style={[styles.box, styles.color1]}>Box 3</Text>
          </View>
        </View>
      </View>
      <View style={styles.conten_B}>
        <Text>Box 1</Text>
        <View style={styles.conten_Box_body}>
          <View style={styles.conten_Box}>
            <Text style={[styles.boxs, styles.color2]}>Box 1</Text>
            <Text style={[styles.boxs, styles.color3]}>Box 2</Text>
            <Text style={[styles.boxs, styles.color9]}>Box 3</Text>
            <Text style={[styles.boxs, styles.color3]}>Box 4</Text>
            <Text style={[styles.boxs, styles.color11]}>Box 3</Text>
            <Text style={[styles.boxs, styles.color12]}>Box 3</Text>
          </View>
          <View style={styles.conten_Box}>
            <Text style={[styles.boxs, styles.color8]}>Box 1</Text>
            <Text style={[styles.boxs, styles.color7]}>Box 3</Text>
            <Text style={[styles.boxs, styles.color13]}>Box 3</Text>
            <Text style={[styles.boxs, styles.color14]}>Box 3</Text>
          </View>
          <View style={styles.conten_Box}>
            <Text style={[styles.boxs, styles.color0]}>Box 1</Text>
            <Text style={[styles.boxs, styles.color3]}>Box 2</Text>
            <Text style={[styles.boxs, styles.color2]}>Box 3</Text>
            <Text style={[styles.boxs, styles.color3]}>Box 4</Text>
            <Text style={[styles.boxs, styles.color9]}>Box 3</Text>
            <Text style={[styles.boxs, styles.color14]}>Box 3</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: "flex",
    paddingTop: "10%",
  },
  conten_A: {
    flex: 1,
    backgroundColor: "#DCD0FF",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },

  conten_B: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  conten_Box_body: {
    flex: 1,
    // display: "flex",
    flexDirection: "row",
  },
  conten_Box: {
    flex: 1,
    // display: "flex",
    flexDirection: "column",
    width: "30%",
  },

  box: {
    flex: 1,
    // display: 1,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "red",
    margin: 5,
  },
  boxs: {
    flex: 2,
    // display: 1,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "red",
  },
  color5: {
    flex: 2,
    backgroundColor: "#00FF00",
  },
  color1: {
    backgroundColor: "#FFFF00",
  },
  color4: {
    backgroundColor: "blue",
  },
  color6: {
    backgroundColor: "#FFFF00",
  },
  color7: {
    flex: 4,
    backgroundColor: "#FFA500",
  },
  color8: {
    flex: 4,
    backgroundColor: "#FFFF00",
  },
  color3: {
    backgroundColor: "#FFC0CB",
  },
  color2: {
    backgroundColor: "red",
  },
  color9: {
    backgroundColor: "#008000",
  },
  color0: {
    backgroundColor: "blue",
  },
  color11: {
    flex: 1,
    backgroundColor: "#cc0066",
  },
  color12: {
    flex: 0.5,

    backgroundColor: "#ccffff",
  },
  color13: {
    backgroundColor: "#cc0066",
  },
  color14: {
    backgroundColor: "#ccffff",
  },
});

export default FlexBoxTask_A;
