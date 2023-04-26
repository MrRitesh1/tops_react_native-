import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

const Cart = ({ name, buttonHide = false, hendalPress }) => {
  // const Cart = ({props, buttonHide}) => {
  // const { name } = props; // Destrusturl

  // const hendalPress = () => {
  //   console.log(name);
  // };
  return (
    <View style={styles.body}>
      <View style={styles.cart}>
        <Text>Welcome To Cart{name}</Text>
        {buttonHide ? null : <Button title="Click Me" onPress={hendalPress} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {},
  cart: {
    backgroundColor: "red",
    height: 100,
    justifyContent: "center",
    textAlign: "center",
    width: "40%",
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
});
export default Cart;
