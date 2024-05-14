import axios from 'axios';
import { server, sessionId } from './general';
const endpoint = "api/auth/";


export function islogged(){
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: server+endpoint+'?sessionId='+sessionId,
      };
    return axios.request(config)
}

export function login(username:string, password:string){
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: server+endpoint+'/api/auth/login',
        headers:{
            'Content-Type': 'application/json',
            'Accept': '*/*'
        },
        data: JSON.stringify({username:username, password:password})
      };
    return axios.request(config)
}

export function logout(){
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: server+endpoint+'/api/auth/logout',
        headers: { 
          'Cookie': 'hola=1'
        }
      };
    return axios.request(config)
}

export function logSess(){
  console.log(sessionId)
}

export { sessionId };
