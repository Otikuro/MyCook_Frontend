import { View, Text, StyleSheet, TextInput } from "react-native";
import { IngredientType, MeasurementType, MethodType, RecipeIngredientType } from "../../types";
import Ingredient from "./Ingredient";

export default function IngredientList({ editable, recipeIngredients, setRecipeIngredients, allMeasurements, deleteIngredientHandler }: { editable: boolean, recipeIngredients: any, setRecipeIngredients?: any, allMeasurements?: MeasurementType[], deleteIngredientHandler?: (ingredient_id: number) => void }) {
   //console.log(recipeIngredients); 
    
    return (
        <View style={styles.table}>
            <View style={styles.row}>
                <Text style={styles.input}>Name</Text>
                <Text style={styles.input}>Quantity</Text>
                <Text style={styles.input}>Measurement</Text>
                <View style={styles.input}/>


{/*                 
                Esto para que era??
                {editable &&
                    <TextInput style={styles.input} />
                } */}
            </View>

            {recipeIngredients.map(
                (ingredient, index: number) => {
                    return <Ingredient editable={editable} key={index} arrayPosition={index} ingredient={ingredient} setRecipeIngredients={setRecipeIngredients}  allMeasurements={allMeasurements} deleteIngredientHandler={deleteIngredientHandler} />
                }
            )} 
        </View>
    )
}

const styles = StyleSheet.create({
    table: {
        width: '100%',
        borderWidth: 1,
        backgroundColor: 'white',
        marginTop: 8,
        marginBottom: 16
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: '25%',
        textAlign: 'center',
        color: 'black'
    }
})