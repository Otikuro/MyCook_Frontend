import { Dimensions, Pressable, StyleSheet, Text } from "react-native";
import { ImageType } from "../../types";
import * as ImagePicker from "expo-image-picker";

export default function AddImageButton({
  addImageFunction,
  width = 1,
}: {
  addImageFunction: (newImage: ImageType) => void;
  width: number;
}) {
  async function getImage() {
    ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
    }).then((result: ImagePicker.ImagePickerResult) => {
      if (result.canceled) return false;
      else
        addImageFunction({
          image_id: result.assets[0].uri.slice(-24, -4),
          alt: "",
          url: result.assets[0].uri,
        });
    });
  }
  return (
    <Pressable
      style={[
        styles.container,
        { width: Dimensions.get("window").width * width },
      ]}
      onPress={getImage}
    >
      <Text>Add image</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    backgroundColor: "lightgray",
    flexGrow: 1,
  },
});
