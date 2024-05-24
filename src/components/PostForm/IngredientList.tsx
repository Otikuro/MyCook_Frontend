import { View, StyleSheet, TextInput } from "react-native";
import { IngredientType, MeasurementType, MethodType, RecipeIngredientType } from "../../types";
import Ingredient from "./Ingredient";

export default function IngredientList({ editable, ingredients, allMeasurements, deleteIngredientHandler }: { editable: boolean, ingredients: RecipeIngredientType[], allMeasurements?: MeasurementType[], deleteIngredientHandler?: (ingredient_id: number) => void }) {
    return (
        <View style={styles.table}>
            <View style={styles.row}>
                <TextInput style={styles.input} editable={false} value='Name' />

                <TextInput style={styles.input} editable={editable} value='Quantity' />

                <TextInput style={styles.input} editable={editable} value='Measure' />

                {editable && <TextInput style={styles.input} />}
            </View>
            {ingredients.map((ingredient, index) => {
                return <Ingredient editable={editable} key={index} ingredient={ingredient} allMeasurements={allMeasurements} deleteIngredientHandler={deleteIngredientHandler} />
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
        marginVertical: 8
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: '33.3%',
        textAlign: 'center',
        color: 'black'
    }
})