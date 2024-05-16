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
  return fetch(config.url, {
    method: "POST",
    body: fd,
  });
}

export async function getAllPost(): Promise<PostType[]> {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: server + endpoint + "all" + "?sessionId=" + sessionId,
  };
  let response = await axios.request(config);
  return response.data.posts as PostType[];
}
