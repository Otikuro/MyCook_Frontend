import { Text, Pressable, Image, View, StyleSheet, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export default function Ingredient({ ingredientName, deleteIngredientHandler }: { ingredientName: string, deleteIngredientHandler: (ingredientName: string) => void }) {
    return (
        <View style={styles.row}>
            <Text>{ingredientName}</Text>

            <TextInput style={styles.input} />

{/*             <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                mode="modal"
                placeholder={"Ingredients"}
                data={data}
                labelField="label"
                valueField="value"
                activeColor="red"
                search
                searchPlaceholder="Select the ingredients"
                onChange={
                    (newIngredient) => {
                        setIngredients(
                            (previousIngredients) => {
                                return [...previousIngredients, newIngredient.value];
                            }
                        )
                    }
                } /> */}

            <Pressable onPress={() => deleteIngredientHandler(ingredientName)}>
                <Text>Borrar</Text>
                <Image></Image>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1
    },
    input: {
        borderWidth: 1,
        borderColor: 'black'
    }
});