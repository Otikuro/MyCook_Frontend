import { useEffect, useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  Image,
  ScrollView
} from "react-native";
import { createPost } from "../../HTTP Requests/post";
import { sessionId } from "../../HTTP Requests/general";
import { ImageType, PostType, RecipeType } from "../../types";
import { Dropdown } from "react-native-element-dropdown";
import ImageSlider from "../ImageSlider/ImageSlider";
import Ingredient from "./Ingredient";
import { getAllIngredients } from "../../HTTP Requests/ingredient";

const PLUS = require('../../../assets/NEW_POST_IMAGE.png');
const DIFFICULTIES = [
  { label: 'facil', value: 'facil' },
  { label: 'medio', value: 'medio' },
  { label: 'dificil', value: 'dificil' }
];
let allIngredients;

getAllIngredients()
  .then(
    (ingredients) => {
      allIngredients = ingredients
    }
  )
  .catch(e => console.log(e))

export default function PostForm({ isText = true }: { isText: boolean }) {
  const [formData, setFormData] = useState<PostType>({
    title: "",
    body: "",
    images: []
  });
  const [ingredients, setIngredients] = useState([]);

  const BASIC_FORM = <>
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
  </>;

  const BUTTONS = <>
    <View style={styles.buttons}>
      <Pressable style={[styles.button, styles.cancelButton]}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.postButton]}
        onPress={isText ? sendPost : sendRecipe}
      >
        <Text style={styles.postButtonText}>Post</Text>
      </Pressable>
    </View>
  </>;

  function deleteIngredientHandler(ingredientName) {
    console.log(ingredients);
    setIngredients((previousIngredients) => { return previousIngredients.filter(e => e !== ingredientName) });
    console.log(ingredients);
  }

  function setPostImages(postImages: ImageType[]) {
    setFormData({ ...formData, images: postImages });
  }

  function sendPost() {
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

  function sendRecipe() {
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
        {BASIC_FORM}

        {BUTTONS}
      </View>
    ) : (
      <ScrollView contentContainerStyle={styles.container}>
        {BASIC_FORM}

        <Text>Duration</Text>
        <TextInput
          style={styles.input}
          value={formData.duration}
          inputMode="numeric"
          onChangeText={(text) => setFormData({ ...formData, duration: text })}
        />

        <Text>Number of rations</Text>
        <TextInput
          style={styles.input}
          value={formData.rations}
          inputMode="numeric"
          onChangeText={(text) => setFormData({ ...formData, rations: text })}
        />

        <Text>Difficulty</Text>
        <Dropdown
          mode="modal"
          data={DIFFICULTIES}
          labelField="label"
          valueField="value"
          onChange={(text) => setFormData({ ...formData, difficulty: text.value })}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          mode="modal"
          placeholder={"Ingredients"}
          data={allIngredients}
          labelField="label"
          valueField="value"
          activeColor="lightgrey"
          search
          searchPlaceholder="Select the ingredients"
          onChange={
            (newIngredient) => {
              if (!(ingredients.includes(newIngredient.value))) {
                setIngredients(
                  (previousIngredients) => {
                    return [...previousIngredients, newIngredient.value];
                  }
                )
              }
            }
          }
        />

        {ingredients.length != 0 && (
          <View style={styles.table}>
            {ingredients.map((ingredient, index) => {
              return <Ingredient key={index} ingredientName={ingredient} deleteIngredientHandler={deleteIngredientHandler} />
            }
            )}
          </View>
        )}

        <Pressable style={styles.newStepButton} >
          <Image style={styles.newStepIcon} source={PLUS} />
          <Text>Add New Step</Text>
        </Pressable>

        {BUTTONS}
      </ScrollView >
    ))
  );
}

const styles = StyleSheet.create({
  container: {
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
    borderRadius: 8,
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
  },

  table: {
    borderWidth: 1,
    backgroundColor: 'white',
    marginVertical: 8
  },


  dropdown: {
    height: 50,
    width: 120,
    borderRadius: 12,
    padding: 12,
    elevation: 2,
    backgroundColor: 'white'
  },
  placeholderStyle: {
    fontSize: 14
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});