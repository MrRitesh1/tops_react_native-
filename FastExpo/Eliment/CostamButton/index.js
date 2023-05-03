import { Pressable, StyleSheet, Text } from "react-native";

function CostamButton({ lebal }) {
  return (
    <Pressable>
      <Text>{lebal}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
export default CostamButton;
