import axios from "axios";
import { server } from "./general";
import { MethodType } from "../types";
const endpoint = "api/measurements/";

export async function getAllMeasurements(): Promise<MethodType[]> {
    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: server + endpoint + "all"
    };
    let response = await axios.request(config);
    return response.data.methods as MethodType[];
}