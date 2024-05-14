import { Dimensions, Pressable, StyleSheet, Text } from "react-native";
import { ImageType } from "../../types";
import * as ImagePicker from "expo-image-picker";

export default function AddImageButton({
  addImageFunction,
}: {
  addImageFunction: (newImage: ImageType) => void;
}) {
  async function getImage() {
    ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
    }).then((result: ImagePicker.ImagePickerResult) => {
      if (result.canceled) return false;
      else
        addImageFunction({
          imageId: result.assets[0].uri,
          alt: "",
          source: result.assets[0].uri,
        });
    });
  }
  return (
    <Pressable style={styles.container} onPress={getImage}>
      <Text>Add image</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width, // Fixed width for button
    height: "100%",
    backgroundColor: "lightgray",
    flexGrow: 1,
  },
});
