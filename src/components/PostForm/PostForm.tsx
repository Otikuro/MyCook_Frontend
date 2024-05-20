import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import { ImageType, PostType } from "../../types";
import ImageSlider from "../ImageSlider/ImageSlider";
import { createPost } from "../../HTTP Requests/post";
import { sessionId } from "../../HTTP Requests/general";
import { COLORS } from '../../styleConstants'

export default function PostForm() {
  const [formData, setFormData] = useState<PostType>({
    title: "",
    body: "",
    images: [],
  });

  function setPostImages(postImages: ImageType[]) {
    setFormData({ ...formData, images: postImages });
  }

  function sendForm() {
    let fd = new FormData();
    fd.append('sessionId', sessionId);
    fd.append("title", formData.title);
    fd.append("description", formData.body);
    formData.images.forEach((image) =>
      //@ts-ignore
      fd.append("images[]", {
        name: image.image_id,
        type: "image/jpeg",
        uri:
          Platform.OS === "ios" ? image.url.replace("file://", "") : image.url,
      })
    );

    createPost(fd)
      .then((response) => console.log('Post created'))
      .catch((error) => console.log("e", error));
  }

  return (
    <View style={styles.container}>
      <Text>Title</Text>
      <TextInput
        style={styles.input}
        value={formData.title}
        onChangeText={(text) => setFormData({ ...formData, title: text })}
      />

      <Text>Description</Text>
      <TextInput
        style={styles.input}
        value={formData.body}
        onChangeText={(text) => setFormData({ ...formData, body: text })}
      />

      <ImageSlider
        images={formData.images}
        setImages={setPostImages}
        width={0.88}
      />

      <View style={styles.buttons}>
        <Pressable style={[styles.button, styles.cancelButton]}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.postButton]}
          onPress={sendForm}
        >
          <Text style={styles.postButtonText}>Post</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "94%",
    alignItems: "center",
    backgroundColor: COLORS.lightestGrey,
    padding: "6%",
  },
  input: {
    width: "100%",
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: "#ffffff",
  },
  buttons: {
    width: "100%",
    marginVertical: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8
  },
  button: {
    borderRadius: 4,
    flexGrow: 1,
  },
  cancelButton: {
    backgroundColor: "#FFE9E9",
  },
  cancelButtonText: {
    color: "#FF0000",
    textAlign: "center",
  },
  postButton: {
    backgroundColor: "#FFAE27",
  },
  postButtonText: {
    textAlign: "center",
  },
});
