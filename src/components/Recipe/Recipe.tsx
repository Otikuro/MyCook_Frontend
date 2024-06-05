import { View, StyleSheet, Text } from "react-native";
import { RecipeType } from "../../types";
import IngredientList from "../PostForm/IngredientList";
import NutritionalInfo from "./NutritionalInfo";

export default function Recipe({recipe}: {recipe: RecipeType}){
    return(
        <View style={styles.container}>
            <Text>Servings: {recipe.quantity}</Text>
            <Text>Duration: {recipe.duration}</Text>
            <Text>Difficulty: {recipe.difficulty}</Text>
            <Text>Ingredients:</Text>
            <IngredientList editable={false} recipeIngredients={recipe.recipe_ingredients?recipe.recipe_ingredients:[]}/>
            <Text>Nutritional info per 100g</Text>
            <NutritionalInfo info={recipe.nutritionPer100g}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop: 16,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'space-between'
    }
})