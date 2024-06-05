import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Selector from "../Selector/Selector";
import PostForm from "../PostForm/PostForm";

export default function NewPost() {
  const [selected, setSelected] = useState(false);

  function selectorHandler() {
    setSelected((previous) => !previous);
  }

  return (
    <View style={styles.container}>
      <Selector
        type={"Post"}
        tabSelected={selected}
        selectorHandler={selectorHandler}
      />

      <PostForm isRecipe={selected} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
});
