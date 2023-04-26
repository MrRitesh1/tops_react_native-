import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Countar = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.body}>
      <View style={styles.countarBody}>
        <Text style={styles.textCount}>{count}</Text>
        <View style={styles.button}>
          <Button
            title="  -  "
            color={"#800000"}
            onPress={() => {
              if (count > 0) setCount(count - 1);
            }}
          />
          <Button
            title=" Resat "
            color={"#008000"}
            onPress={() => setCount(0)}
          />
          <Button
            title="  +  "
            color={"#800000"}
            onPress={() => {
              if (count < 10) setCount(count + 1);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
    padding: "10%",
    backgroundColor: "#E0B0FF",
    borderRadius: 300,
    // height: "50%",
  },
  countarBody: {
    flex: 1,
    display: "flex",
    padding: "5%",
    width: "100%",
    height: 300,
    borderWidth: 2,
    backgroundColor: "#FCDFFF",
    borderRadius: 20,
    borderColor: "#F2A2E8",
    justifyContent: "center",
    alignItems: "center",
  },
  textCount: {
    fontSize: 30,
    backgroundColor: "#fff",
    borderWidth: 4,
    borderColor: "#000",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: "30%",
    width: "30%",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    padding: "5%",
  },
  button: {
    flexDirection: "row",
    margin: "10%",
  },
});

export default Countar;
