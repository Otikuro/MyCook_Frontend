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
import { createPost, getPost, updatePost } from "../../HTTP Requests/post";
import { sessionId } from "../../HTTP Requests/general";
import { ImageType, MethodType, PostType, RecipeType } from "../../types";
import { Dropdown } from "react-native-element-dropdown";
import ImageSlider from "../ImageSlider/ImageSlider";
import { getAllIngredients } from "../../HTTP Requests/ingredient";
import IngredientList from "./IngredientList";
import { getAllMeasurements } from "../../HTTP Requests/measurement";
import { useNavigation, useRoute } from "@react-navigation/native";

const PLUS = require('../../../assets/NEW_POST_IMAGE.png');
const DIFFICULTIES = [
  { label: 'facil', value: 'facil' },
  { label: 'medio', value: 'medio' },
  { label: 'dificil', value: 'dificil' }
];

export default function PostForm({ isRecipe = true }: { isRecipe: boolean }) {
  const navigation = useNavigation();
  const route = useRoute();

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
  const [beingUpdated, setBeingUpdated] = useState(false);
  function sendPost() {
    let fd = new FormData();
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
    if (isRecipe) {
      let recipe: RecipeType = {
        duration: recipeData.duration,
        difficulty: recipeData.difficulty,
        quantity: recipeData.quantity,
        recipe_ingredients: recipeIngredients,
        steps: []
      }
      fd.append('recipe', JSON.stringify(recipe));
      console.log('recipe', JSON.stringify(recipe))
    }
    console.log('Sending post')

    createPost(fd)
      .then((response) => { return response.json() })
      .then((data) => {
        let post: PostType = data.post as PostType
        console.log('post: ', post)
        navigation.reset({
          index: 0,
          routes: [
            { name: 'Explorer' },
          ],
        })
        navigation.navigate('Post', { post: post })
      })
      .catch((error) => console.log("Error", error.message));
  }
  function sendUpdate() {
    let fd = new FormData();
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
    //@ts-ignore
    if (route.params.post.recipe && route.params.post.recipe != null) {
      let recipe: RecipeType = {
        duration: recipeData.duration,
        difficulty: recipeData.difficulty,
        quantity: recipeData.quantity,
        recipe_ingredients: recipeIngredients,
        steps: []
      }
      fd.append('recipe', JSON.stringify(recipe));
      console.log('recipe', JSON.stringify(recipe))
    }

    console.log('Sending post')

    updatePost(fd, postData.post_id)
      .then((response) => { console.log('res', response); return response.json() })
      .then((data) => {
        let post: PostType = data.post as PostType
        console.log('post: ', post)
        navigation.reset({
          index: 0,
          routes: [
            { name: 'Explorer' },
          ],
        })
        navigation.navigate('Explorer')
      })
      .catch((error) => console.log("Error", error.message));
  }


  //Recover all measurement units in DB
  useEffect(
    () => {
      getAllMeasurements()
        .then((measurements) => {
          setAllMeasurements(measurements)
        })
        .catch((e) => console.log(e));

      getAllIngredients()
        .then((ingredients) => setAllIngredients(ingredients))
        .catch((e) => console.log(e));


      //@ts-ignore
      if (route.params && route.params.post) {
        //@ts-ignore
        setPostData(route.params.post as PostType)
        //@ts-ignore
        //if (route.params.post.recipe)
          //@ts-ignore
          setRecipeData(route.params.post.recipe)
        setBeingUpdated(true)
        if (route.params.post.recipe && route.params.post.recipe != null) {
          setRecipeIngredients(route.params.post.recipe.recipe_ingredients)
        }
      }

    }, []
  );

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
    {!(beingUpdated && postData.images.length <=0) && 
    <ImageSlider
      images={postData.images}
      setImages={beingUpdated ? undefined : setPostImages}
      width={0.88}
    />}
  </>;

  const BUTTONS = <>
    <View style={styles.buttons}>
      <Pressable style={[styles.button, styles.cancelButton]} onPress={beingUpdated?navigation.goBack:clear}>
        <Text style={styles.cancelButtonText}>{beingUpdated?'Cancel':'Clear'}</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.postButton]}
        onPress={beingUpdated ? sendUpdate : sendPost}
      >
        <Text style={styles.postButtonText}>{beingUpdated?'Update':'Post'}</Text>
      </Pressable>
    </View>
  </>;



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
    setRecipeIngredients([])
  }

  function deleteIngredientHandler(ingredient_id) {
    setRecipeIngredients((previousIngredients) => { return previousIngredients.filter(ingredient => ingredient.ingredient.ingredient_id !== ingredient_id) });
  }

  function setPostImages(postImages: ImageType[]) {
    setPostData({ ...postData, images: postImages });
  }



  return (
    (!isRecipe ? (
      <View style={styles.container}>
        {BASIC_FORM}

        {BUTTONS}
      </View>
    ) : (
      <ScrollView contentContainerStyle={styles.container}>
        {BASIC_FORM}

        {recipeData != null  && <>
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
          value={recipeData.difficulty}
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

        {recipeIngredients.length > 0 && (
          <IngredientList editable recipeIngredients={recipeIngredients} setRecipeIngredients={setRecipeIngredients} allMeasurements={allMeasurements} deleteIngredientHandler={deleteIngredientHandler} />
        )}</>}

        {/* <Pressable style={styles.newStepButton} >
          <Image style={styles.newStepIcon} source={PLUS} />
          <Text>Add New Step</Text>
        </Pressable> */}

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