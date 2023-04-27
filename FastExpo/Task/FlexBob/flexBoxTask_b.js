import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

const FlexBoxTask_B = () => {
  return (
    <View style={styles.body}>
      <View style={styles.conten_A}>
        <Text>Box 1</Text>
        <View style={styles.conten_Box_body}>
          <View style={styles.conten_Box}>
            <Text style={[styles.box, styles.color1]}>Box 1</Text>
            <Text style={[styles.box, styles.color2]}>Box 2</Text>
            <Text style={[styles.box, styles.color3]}>Box 3</Text>
            <Text style={[styles.box, styles.color4]}>Box 4</Text>
            <Text style={[styles.box, styles.color5]}>Box 4</Text>
            <Text style={[styles.box, styles.color6]}>Box 4</Text>
          </View>
          <View style={styles.conten_Box}>
            <Text style={[styles.box, styles.color11]}>Box 1</Text>
            <Text style={[styles.box, styles.color12]}>Box 2</Text>
            <Text style={[styles.box, styles.color13]}>Box 3</Text>
            <Text style={[styles.box, styles.color14]}>Box 4</Text>
            <Text style={[styles.box, styles.color15]}>Box 4</Text>
            <Text style={[styles.box, styles.color16]}>Box 4</Text>
          </View>
          <View style={styles.conten_Box}>
            <Text style={[styles.box, styles.color21]}>Box 1</Text>
            <Text style={[styles.box, styles.color22]}>Box 2</Text>
            <Text style={[styles.box, styles.color23]}>Box 3</Text>
            <Text style={[styles.box, styles.color24]}>Box 4</Text>
            <Text style={[styles.box, styles.color25]}>Box 4</Text>
            <Text style={[styles.box, styles.color26]}>Box 4</Text>
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
  },
  color1: {
    flex: 3,
    backgroundColor: "#800080",
  },
  color2: {
    backgroundColor: "#FFFF00",
  },
  color3: {
    flex: 2,
    backgroundColor: "#00FF00",
  },
  color4: {
    backgroundColor: "#fff",
  },
  color5: {
    backgroundColor: "#FF00FF",
  },
  color6: {
    flex: 2,
    backgroundColor: "#FFC0CB",
  },
  color11: {
    flex: 3,
    backgroundColor: "#93917C",
  },
  color12: {
    backgroundColor: "#64E986",
  },
  color13: {
    flex: 2.5,
    backgroundColor: "#6A0DAD",
  },
  color14: {
    flex: 0.5,
    backgroundColor: "#fff",
  },
  color15: {
    backgroundColor: "#00FF00",
  },
  color16: {
    flex: 2,
    backgroundColor: "#000",
  },
  color21: {
    flex: 2.4,
    backgroundColor: "#342D7E",
  },
  color22: {
    flex: 0.6,
    backgroundColor: "#fff",
  },
  color23: {
    flex: 1,
    backgroundColor: "#9932CC",
  },
  color24: {
    flex: 3,
    backgroundColor: "#5865F2",
  },
  color25: {
    backgroundColor: "#6A0DAD",
  },
  color26: {
    flex: 2,
    backgroundColor: "#00FFFF",
  },
});

export default FlexBoxTask_B;
