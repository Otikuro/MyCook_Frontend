import { Text, Pressable, Image, View, StyleSheet, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { IngredientType, MeasurementType, MethodType, RecipeIngredientType } from "../../types";

export default function Ingredient({ arrayPosition, editable, ingredient, setRecipeIngredients, allMeasurements, deleteIngredientHandler }: { arrayPosition: number, editable: boolean, ingredient: any, setRecipeIngredients: any, allMeasurements?: MeasurementType[], deleteIngredientHandler: (ingredient_id: number) => void }) {
    return (
        <View style={styles.row}>
            <Text style={styles.input}>
                {ingredient.ingredient.name}
            </Text>

            <TextInput style={styles.input} editable={editable} value={ingredient.quantity} onChangeText={(newValue) => {
                setRecipeIngredients(
                    (previousIngredients) => {
                        previousIngredients[arrayPosition].quantity = newValue;
                        return previousIngredients;
                    }
                )
            }} />

            <View style={styles.input}>
                <Dropdown
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
                                    previousIngredients[arrayPosition].measurement = newUnit;
                                    return previousIngredients;
                                }
                            )
                        }
                    }
                />
            </View>


            <Pressable onPress={() => deleteIngredientHandler(ingredient.ingredient.ingredient_id)}>
                <Text>Borrar</Text>
                <Image></Image>
            </Pressable>
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
    }
});