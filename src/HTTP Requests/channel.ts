import axios from "axios";
import { server, sessionId } from "./general";
import { ChannelType } from "../types";
const endpoint = "api/channel/";

export async function getAllChannels(): Promise<ChannelType[]> {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: server + endpoint + "all" + "?sessionId=" + sessionId,
    };
    let response = await axios.request(config);
    return response.data.posts as ChannelType[];
  }