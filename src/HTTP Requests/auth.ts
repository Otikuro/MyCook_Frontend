import axios from 'axios';
import { server, sessionId } from './general';
const endpoint = "api/auth/";

export async function login(username: string, password: string) {
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: server + endpoint + 'login',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    },
    data: JSON.stringify({ username: username, password: password })
  };
  console.log(config.url)
  let response = await axios.request(config)
  console.log(response.data)
  return response
}

export function logout() {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: server + endpoint + 'logout',
  };
  return axios.request(config)
}

export function islogged() {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: server + endpoint + 'logged/sessionId=' + sessionId,
  };
  console.log(config.url)
  return axios.request(config)
}

export function register(formData) {
  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: server + endpoint + "register",
    data: formData,
  };
  
  //return axios.request(config);
  return fetch(config.url, {
    method: "POST",
    body: formData,
  });
}

export { sessionId };