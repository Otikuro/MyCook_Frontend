import axios from "axios";
import { server, sessionId } from "./general";
import { PostType } from "../types";
const endpoint = "api/post/";

export function createPost(fd: FormData) {
  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: server + endpoint + "create",
    data: fd,
  };
  //return axios.request(config);
  console.log(fd)
  return fetch(config.url, {
    method: "POST",
    body: fd,
  });
}

export async function getAllPost(): Promise<PostType[]> {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: server + endpoint + "all"
  };
  console.log(config.url)
  let response = await axios.request(config);
  return response.data.posts as PostType[];
}

export async function getPost(id: number): Promise<PostType> {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: server + endpoint + "get/" + id,
  };
  let response = await axios.request(config);
  return response.data.post as PostType;
}

export async function votePost(id: number, liked: boolean): Promise<PostType> {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: server + endpoint + "vote/" + id + '/' + (liked ? 1 : 0),
  };
  let response = await axios.request(config);
  return response.data.post as PostType;
}
