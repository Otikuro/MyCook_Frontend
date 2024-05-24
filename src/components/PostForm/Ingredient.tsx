import { Text, Pressable, Image, View, StyleSheet, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { IngredientType, MethodType } from "../../types";

export default function Ingredient({ ingredient, allMethods, deleteIngredientHandler }: { ingredient: IngredientType, allMethods: MethodType[], deleteIngredientHandler: (ingredient_id: number) => void }) {
    console.log(allMethods);
    
    return (
        <View style={styles.row}>
            <Text>{ingredient.name}</Text>

            <TextInput style={styles.input} />

{/*             <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                mode="modal"
                placeholder={"Ingredients"}
                data={allMethods}
                labelField="name"
                valueField="method_id"
                activeColor="red"
                search
                searchPlaceholder="Select the ingredients"
                onChange={ () => {}
                } /> */}

            <Pressable onPress={() => deleteIngredientHandler(ingredient.ingredient_id)}>
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