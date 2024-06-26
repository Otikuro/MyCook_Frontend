import axios from "axios";
import { server } from "./general";
import { IngredientType } from "../types";
const endpoint = "api/ingredients/";

export async function getAllIngredients(): Promise<IngredientType[]> {
    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: server + endpoint + "all"
    };
    let response = await axios.request(config);
    return response.data.ingredients as IngredientType[];
}