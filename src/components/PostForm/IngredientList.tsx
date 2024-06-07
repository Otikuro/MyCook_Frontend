import { View, Text, StyleSheet } from "react-native";
import {
  MeasurementType
} from "../../types";
import Ingredient from "./Ingredient";

// Este componente muestra una lista de ingredientes para una receta.
export default function IngredientList({
  editable,
  recipeIngredients,
  setRecipeIngredients,
  allMeasurements,
  deleteIngredientHandler,
}: {
  editable: boolean;
  recipeIngredients: any;
  setRecipeIngredients?: any;
  allMeasurements?: MeasurementType[];
  deleteIngredientHandler?: (ingredient_id: number) => void;
}) {
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text
          style={[
            styles.input,
            editable ? styles.editable : styles.nonEditable,
          ]}
        >
          Name
        </Text>
        <Text
          style={[
            styles.input,
            editable ? styles.editable : styles.nonEditable
          ]}
        >
          Quantity
        </Text>
        <Text
          style={[
            styles.input,
            editable ? styles.editable : styles.nonEditable
          ]}
        >
          Measurement
        </Text>
        {editable && <View style={[styles.input, styles.editable]} />}
      </View>

      {recipeIngredients.map((ingredient, index: number) => {
        return (
          <Ingredient
            editable={editable}
            key={index}
            arrayPosition={index}
            ingredient={ingredient}
            setRecipeIngredients={setRecipeIngredients}
            allMeasurements={allMeasurements}
            deleteIngredientHandler={deleteIngredientHandler}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    width: "100%",
    borderWidth: 1,
    backgroundColor: "white",
    marginTop: 8,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    color: "black",
  },
  editable: {
    width: "25%",
  },
  nonEditable: {
    width: "33.3%",
  },
});
