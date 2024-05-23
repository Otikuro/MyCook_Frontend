import axios from "axios";
import { server, sessionId } from "./general";
const endpoint = "api/ingredients/";

export async function getAllIngredients() {
    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: server + endpoint + "all"
    };
    let response = await axios.request(config);
    return response.data.posts as string[];
}