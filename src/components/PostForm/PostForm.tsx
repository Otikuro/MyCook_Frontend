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
import { ImageType, MethodType, PostType, RecipeType } from "../../types";
import { Dropdown } from "react-native-element-dropdown";
import ImageSlider from "../ImageSlider/ImageSlider";
import { getAllIngredients } from "../../HTTP Requests/ingredient";
import IngredientList from "./IngredientList";
import { getAllMeasurements } from "../../HTTP Requests/measurement";

const PLUS = require('../../../assets/NEW_POST_IMAGE.png');
const DIFFICULTIES = [
  { label: 'facil', value: 'facil' },
  { label: 'medio', value: 'medio' },
  { label: 'dificil', value: 'dificil' }
];

export default function PostForm({ isRecipe = true }: { isRecipe: boolean }) {
  const [postData, setPostData] = useState<PostType>({
    title: "",
    body: "",
    images: []
  });
  const [recipeData, setRecipeData] = useState<RecipeType>({
    duration: 0,
    quantity: 0,
    difficulty: '',
    steps: [],
    recipe_ingredients: []
  });
  const [allMeasurements, setAllMeasurements] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [postCreated, setPostCreated] = useState(false);

  const BASIC_FORM = <>
    <Text>Title</Text>
    <TextInput
      style={styles.input}
      value={postData.title}
      onChangeText={(text) => setPostData({ ...postData, title: text })}
    />

    <Text>Description</Text>
    <TextInput
      style={styles.input}
      value={postData.body}
      onChangeText={(text) => setPostData({ ...postData, body: text })}
    />

    <ImageSlider
      images={postData.images}
      setImages={setPostImages}
      width={0.88}
    />
  </>;

  const BUTTONS = <>
    <View style={styles.buttons}>
      <Pressable style={[styles.button, styles.cancelButton]} onPress={clear}>
        <Text style={styles.cancelButtonText}>Clear</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.postButton]}
        onPress={isRecipe ? sendRecipe : sendPost}
      >
        <Text style={styles.postButtonText}>Post</Text>
      </Pressable>
    </View>
  </>;

  //Recover all measurement units in DB
  useEffect(
    () => {
      getAllMeasurements()
        .then((measurements) => {
          setAllMeasurements(measurements)
        })
        .catch((e) => console.log(e));
    }, []
  );

  //Recover all ingredients in DB
  useEffect(
    () => {
      getAllIngredients()
        .then((ingredients) => setAllIngredients(ingredients))
        .catch((e) => console.log(e));
    },
    []
  );

  function clear() {
    setPostData({
      title: "",
      body: "",
      images: []
    })
    setRecipeData({
      duration: 0,
      quantity: 0,
      difficulty: '',
      steps: [],
      recipe_ingredients: []
    }
    )
  }

  function deleteIngredientHandler(ingredient_id) {
    setRecipeIngredients((previousIngredients) => { return previousIngredients.filter(ingredient => ingredient.ingredient.ingredient_id !== ingredient_id) });
  }

  function setPostImages(postImages: ImageType[]) {
    setPostData({ ...postData, images: postImages });
  }

  function sendPost() {
    let fd = new FormData();
    fd.append('sessionId', sessionId);
    fd.append("title", postData.title);
    fd.append("description", postData.body);
    postData.images.forEach((image) =>
      //@ts-ignore
      fd.append("images[]", {
        name: image.image_id,
        type: "image/jpeg",
        uri:
          Platform.OS === "ios" ? image.url.replace("file://", "") : image.url,
      })
    );

    console.log('Sending post')

    createPost(fd)
      .then(() => setPostCreated(true))
      .catch((error) => console.log("Error", JSON.stringify(error))); 
  }

  //Crear receta, codigo repetido con crear post
  function sendRecipe() {
    let fd = new FormData();
    fd.append("title", postData.title);
    fd.append("description", postData.body);
    //@ts-ignore
    fd.append('recipe', JSON.stringify({duration: recipeData.duration, difficulty: recipeData.difficulty, quantity: recipeData.quantity, recipeIngredidents: recipeIngredients, steps: []}));

    console.log('sending recipe')

    createPost(fd)
      .then(() => setPostCreated(true))
      .catch((error) => console.log("Error", JSON.stringify(error))); 
  }

  return (
    (!isRecipe ? (
      <View style={styles.container}>
        {postCreated && (<Text style={{ color: 'green' }}>Post Created!</Text>)}
        {BASIC_FORM}

        {BUTTONS}
      </View>
    ) : (
      <ScrollView contentContainerStyle={styles.container}>
        {postCreated && (<Text style={{ color: 'green' }}>Post Created!</Text>)}
        {BASIC_FORM}

        <Text>Duration</Text>
        <TextInput
          style={styles.input}
          value={String(recipeData.duration)}
          inputMode="numeric"
          onChangeText={(text) => setRecipeData({ ...recipeData, duration: text })}
        />

        <Text>Number of rations</Text>
        <TextInput
          style={styles.input}
          value={String(recipeData.quantity)}
          inputMode="numeric"
          onChangeText={(text) => setRecipeData({ ...recipeData, quantity: Number(text) })}
        />

        <Dropdown
          style={styles.dropdown}
          mode="modal"
          data={DIFFICULTIES}
          labelField="label"
          valueField="value"
          placeholder={"Difficulty"}
          onChange={(text) => setRecipeData({ ...recipeData, difficulty: text.value })}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          mode="modal"
          data={allIngredients}
          labelField="name"
          valueField="name"
          placeholder={"Ingredients"}
          activeColor="lightgrey"
          search
          searchPlaceholder="Select the ingredients"
          onChange={
            (newIngredient) => {
              //No funciona permite ingredientes duplicados
              if (!(recipeIngredients.includes(newIngredient))) {
                setRecipeIngredients(
                  (previousIngredients) => {
                    return [...previousIngredients, { ingredient: newIngredient, quantity: 1, measurement: '' }];
                  }
                )
              }
            }
          }
        />

        {recipeIngredients.length != 0 && (
          <IngredientList editable recipeIngredients={recipeIngredients} setRecipeIngredients={setRecipeIngredients} allMeasurements={allMeasurements} deleteIngredientHandler={deleteIngredientHandler} />
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
    backgroundColor: 'white',
    marginVertical: 8
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
  }
});