import axios from "axios";
import { server, sessionId } from "./general";
import { PostType } from "../types";
const endpoint = "api/post/";

export function createPost(fd: FormData) {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: server + endpoint + "/all",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    data: { ...fd, sessionId: sessionId },
  };
  return axios.request(config);
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
