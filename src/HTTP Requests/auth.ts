import axios from 'axios';
import { server, sessionId } from './general';
const endpoint = "api/auth/";

export function login(username: string, password: string) {
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
  return axios.request(config)
}

export function logout() {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: server + endpoint + 'logout',
    headers: {
      'Cookie': 'hola=1'
    }
  };
  return axios.request(config)
}

export function islogged() {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: server + endpoint + 'logged/sessionId=' + sessionId,
  };
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