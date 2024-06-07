import {
  Text,
  Pressable,
  Image,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import {
  IngredientType,
  MeasurementType,
  MethodType,
  RecipeIngredientType,
} from "../../types";

const deleteImage = require("../../../assets/red-trash-can-icon.png");

// Este es un componente de React Native llamado `Ingredient`, que muestra un ingrediente de una receta.
export default function Ingredient({
  // Propiedades recibidas por el componente
  arrayPosition, // Posición del ingrediente en un array de ingredientes
  editable, // Booleano que indica si el ingrediente es editable o no
  ingredient, // Objeto que contiene información del ingrediente
  setRecipeIngredients, // Función para actualizar la lista de ingredientes de la receta
  allMeasurements, // Lista de todas las unidades de medida disponibles
  deleteIngredientHandler, // Función para eliminar un ingrediente
}: {
  arrayPosition: number; // Tipo de dato de la propiedad `arrayPosition`
  editable: boolean; // Tipo de dato de la propiedad `editable`
  ingredient: RecipeIngredientType; // Tipo de dato de la propiedad `ingredient`
  setRecipeIngredients: any; // Tipo de dato de la propiedad `setRecipeIngredients`
  allMeasurements?: MeasurementType[]; // Tipo de dato de la propiedad `allMeasurements`, es opcional
  deleteIngredientHandler: (ingredient_id: number) => void; // Tipo de dato de la propiedad `deleteIngredientHandler`
}) {
  // Retorna la estructura visual del componente
  return (
    // Contenedor principal del componente
    <View style={styles.row}>
      {/* Nombre del ingrediente */}
      <Text
        style={[
          styles.input,
          styles.centeredText,
          editable ? styles.editable : styles.nonEditable,
        ]}
      >
        {ingredient.ingredient.name}
      </Text>

      {/* Campo de texto para la cantidad del ingrediente */}
      <TextInput
        style={[styles.input, editable ? styles.editable : styles.nonEditable]}
        editable={editable}
        inputMode="numeric"
        value={ingredient.quantity.toString()}
        onChangeText={(newValue) => {
          // Función para actualizar la cantidad del ingrediente
          setRecipeIngredients((previousIngredients) => {
            let ingredients = [...previousIngredients];
            ingredients[arrayPosition] = {
              ...ingredients[arrayPosition],
              quantity: newValue,
            };
            return ingredients;
          });
        }}
      />

      {/* Dropdown para seleccionar la unidad de medida */}
      <View
        style={[styles.input, editable ? styles.editable : styles.nonEditable]}
      >
        {/* Dropdown visible solo si el ingrediente es editable */}
        {editable && (
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
            onChange={(newUnit) => {
              // Función para actualizar la unidad de medida del ingrediente
              setRecipeIngredients((previousIngredients) => {
                let ingredients = [...previousIngredients];
                ingredients[arrayPosition] = {
                  ...ingredients[arrayPosition],
                  measurement: newUnit,
                };
                return ingredients;
              });
            }}
          />
        )}
        {/* Texto estático para mostrar la unidad de medida si el ingrediente no es editable */}
        {!editable && (
          <Text style={styles.centeredText}>{ingredient.measurement.name}</Text>
        )}
      </View>

      {/* Botón para eliminar el ingrediente (visible solo si es editable) */}
      {editable && (
        <Pressable
          onPress={() =>
            deleteIngredientHandler(ingredient.ingredient.ingredient_id)
          }
          style={styles.deleteButton}
        >
          <Image source={deleteImage} style={styles.deleteImage} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "25%",
    textAlign: "center",
    color: "black",
  },

  editable: {
    width: "25%",
  },
  nonEditable: {
    width: "33.3%",
  },

  dropdown: {
    height: 20,
    width: 80,
    borderRadius: 12,
    padding: 12,
    elevation: 2,
    backgroundColor: "white",
    marginVertical: 8,
  },
  placeholderStyle: {
    fontSize: 14,
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
    textAlign: "center",
    verticalAlign: "middle",
  },
  deleteImage: {
    height: 24,
    aspectRatio: 0.8,
  },
  deleteButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 4,
  },
});
