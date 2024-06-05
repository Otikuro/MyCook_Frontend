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

export async function getLikedBy(): Promise<PostType[]> {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: server + endpoint + "likedBy"
  };
  console.log(config.url)
  let response = await axios.request(config);
  return response.data.posts as PostType[];
}

export async function getPostedBy(): Promise<PostType[]> {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: server + endpoint + "postedBy"
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
  console.log(config.url)
  let response = await axios.request(config);
  console.log(response.data)
  return response.data.post as PostType;
}

export function commentPost(body: string, post_id: number) {
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: server + endpoint + 'comment/' + post_id,
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    },
    data: JSON.stringify({ body: body})
  };
  console.log(config.url)
  return axios.request(config)
}
