import { StyleSheet, Pressable, Text } from "react-native";
import { FAB } from "react-native-paper";

export function CreateGameButton() {
  return (
    <Pressable style={styles.createGameButton}>
      <Text style={styles.createGameText}>게임 생성</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  createGameButton: {
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#2196F3",
  },
  createGameText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
