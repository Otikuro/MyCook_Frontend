import { Text, Pressable, Image, View, StyleSheet, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { IngredientType, MeasurementType, MethodType, RecipeIngredientType } from "../../types";

export default function Ingredient({ arrayPosition, editable, ingredient, setRecipeIngredients, allMeasurements, deleteIngredientHandler }: { arrayPosition: number, editable: boolean, ingredient: RecipeIngredientType, setRecipeIngredients: any, allMeasurements?: MeasurementType[], deleteIngredientHandler: (ingredient_id: number) => void }) {
    return (
        <View style={styles.row}>
            <Text style={[styles.input, styles.centeredText, editable ? styles.editable : styles.nonEditable]}>
                {ingredient.ingredient.name}
            </Text>

            <TextInput style={[styles.input, editable ? styles.editable : styles.nonEditable]} editable={editable} inputMode="numeric" value={ingredient.quantity.toString()} onChangeText={(newValue) => {
                setRecipeIngredients(
                    (previousIngredients) => {
                        let ingredients = [...previousIngredients]
                        ingredients[arrayPosition] = { ...ingredients[arrayPosition], quantity: newValue };
                        return ingredients;
                    }
                )
            }} />

            <View style={[styles.input, editable ? styles.editable : styles.nonEditable]}>
                {editable && <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}

                    mode="modal"
                    placeholder={"Unit"}
                    data={allMeasurements}
                    labelField="name"
                    valueField="measurement_id"
                    value={ingredient.measurement}
                    activeColor="lightgrey"
                    search
                    searchPlaceholder="Select the unit of measure"
                    onChange={
                        (newUnit) => {
                            setRecipeIngredients(
                                (previousIngredients) => {
                                    let ingredients = [...previousIngredients]
                                    ingredients[arrayPosition] = { ...ingredients[arrayPosition], measurement: newUnit };
                                    return ingredients;
                                }
                            )
                        }
                    }
                />}
                {!editable && <Text style={styles.centeredText}>{ingredient.measurement.name}</Text>}
            </View>


            {editable && <Pressable onPress={() => deleteIngredientHandler(ingredient.ingredient.ingredient_id)}>
                <Text>Borrar</Text>
                <Image></Image>
            </Pressable>}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: '25%',
        textAlign: 'center',
        color: 'black'
    },

    editable: {
        width: '25%',
    },
    nonEditable: {
        width: '33.3%',
    },

    dropdown: {
        height: 20,
        width: 80,
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
    },
    centeredText: {
        textAlign: 'center',
        verticalAlign: 'middle'
    }
});