import { View, Text, Pressable, StyleSheet } from "react-native";

export default function Selector({
  type,
  tabSelected,
  selectorHandler,
}: {
  type: "Search" | "Post";
  tabSelected: boolean;
  selectorHandler: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, !tabSelected ? styles.selected : null]}
        onPress={() => selectorHandler(false)}
      >
        <Text>{type === "Search" ? "Posts" : "Post"}</Text>
      </Pressable>

      <Pressable
        style={[styles.button, tabSelected ? styles.selected : null]}
        onPress={() => selectorHandler(true)}
      >
        <Text>{type === "Search" ? "Channels" : "Recipe"}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#dddddd",
  },
  button: {
    height: "70%",
    width: "44%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  selected: {
    backgroundColor: "#ffffff",
  },
});
