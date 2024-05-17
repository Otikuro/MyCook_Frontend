import axios from "axios";

//export const server = "http://10.0.2.2:80/";
export const server = 'http://192.168.0.29:80/'
//export const server = "http://127.0.0.1:80/";

export let sessionId = "";
export function setSessionId(newSessionId: string) {
  sessionId = newSessionId;
}

export function checkHealth() {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: server + "api/health",
  };
  return axios.request(config);
}
