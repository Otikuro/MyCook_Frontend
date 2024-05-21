import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  Image
} from "react-native";
import { createPost } from "../../HTTP Requests/post";
import { sessionId } from "../../HTTP Requests/general";
import { ImageType, PostType } from "../../types";
import { COLORS } from '../../styleConstants'
import ImageSlider from "../ImageSlider/ImageSlider";

const PLUS = require('../../../assets/NEW_POST_IMAGE.png');

export default function PostForm({ isText = true }: { isText: boolean }) {
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
    (!isText ? (
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
    ) : (
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

        <Pressable style={styles.newStepButton} >
          <Image style={styles.newStepIcon} source={PLUS} />
          <Text>Add New Step</Text>
        </Pressable>
      </View>
    ))
  );
}

const styles = StyleSheet.create({
  container: {
    height: "94%",
    alignItems: "center",
    backgroundColor: 'COLORS.lightestGrey',
    paddingVertical: '2%',
    paddingHorizontal: "6%",
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
    paddingVertical: 6
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
  newStepButton: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  newStepIcon: {
    height: 20,
    width: 20
  }
});