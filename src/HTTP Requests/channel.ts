import axios from "axios";
import { server, sessionId } from "./general";
import { ChannelType } from "../types";

const endpoint = "api/channels/";

export async function getAllChannels(): Promise<ChannelType[]> {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: server + endpoint + 'all'
    };
    console.log(config.url);
    let response = await axios.request(config);
    return response.data.channels as ChannelType[];
}

export async function getUserChannels(): Promise<ChannelType[]> {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: server + endpoint + 'followedBy/'
  };
  console.log(config.url)
  let response = await axios.request(config);
  console.log(response.data)
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

export async function createChannel(name :string) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: server + endpoint + 'create/'+ name
  };
  console.log(config.url)
  let response = await axios.request(config);
  return response.data.message;
}

export async function joinChannel(id :number) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: server + endpoint + 'join/'+ id
  };
  console.log(config.url)
  let response = await axios.request(config);
  return response.data.message;
}

export async function addPostToChannel(channel_id :number, post_id: number) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: server + endpoint + 'addPost/'+ channel_id + '/'+ post_id
  };
  console.log(config.url)
  let response = await axios.request(config);
  console.log(response.data.message);
  return response
}