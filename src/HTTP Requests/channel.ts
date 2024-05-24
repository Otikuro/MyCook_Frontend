import axios from "axios";
import { server, sessionId } from "./general";
import { ChannelType } from "../types";

const endpoint = "api/channels/";

export async function getAllChannels(): Promise<ChannelType[]> {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: server + endpoint + 'all/'
    };
    let response = await axios.request(config);
    return response.data.channels as ChannelType[];
}

export async function getUserChannels(): Promise<ChannelType[]> {
  const id = 1;
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: server + endpoint + 'followedBy/'+ id
  };
  console.log(config.url)
  let response = await axios.request(config);
  return response.data.channels as ChannelType[];
}

export async function getPostsFromChannel(id:number) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: server + endpoint + 'getPosts/'+ id
  };
  console.log(config.url)
  let response = await axios.request(config);
  return response.data.posts as ChannelType[];
}