import { Text, Pressable, Image, View, StyleSheet, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { IngredientType, MeasurementType, MethodType, RecipeIngredientType } from "../../types";

export default function Ingredient({editable, ingredient, measurement, allMeasurements, deleteIngredientHandler }: {editable: boolean, ingredient: RecipeIngredientType, measurement?: MeasurementType,allMeasurements?: MeasurementType[], deleteIngredientHandler: (ingredient_id: number) => void }) {
    
    return (
        <View style={styles.row}>
            <TextInput style={styles.input} editable={false} value={ingredient.ingredient.name}/>

            <TextInput style={styles.input} editable={editable} value={ingredient.quantity.toString()}/>

            {editable && <Dropdown
/*                 style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle} */
                mode="modal"
                placeholder={"Measurement"}
                data={allMeasurements}
                labelField="name"
                valueField="measurement_id"
                activeColor="red"
                search
                searchPlaceholder="Select the method"
                onChange={ () => {}
                } />}
            {!editable && <TextInput style={styles.input} editable={editable} value={ingredient.measurement.name}/>}

            {editable && <Pressable onPress={() => deleteIngredientHandler(ingredient.ingredient.ingredient_id)}>
                <Text>Borrar</Text>
                <Image></Image>
            </Pressable>}
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
        borderColor: 'black',
        width: '33.3%',
        textAlign:'center',
        color: 'black'
    }
});