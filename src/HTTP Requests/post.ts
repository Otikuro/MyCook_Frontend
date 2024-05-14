import axios from "axios";
import { server, sessionId } from "./general";
const endpoint = "api/auth/";


export function createPost(fd: FormData) {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: server + endpoint,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    data: { ...fd, sessionId: sessionId },
  };
  return axios.request(config);
}
