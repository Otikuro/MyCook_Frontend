import axios from 'axios';
const server = 'http://127.0.0.1:8000/'
const endpoint = 'api/auth/'

export function islogged(){
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/auth/logged',
      };
    return axios.request(config)
}

export function login(username:string, password:string){
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/auth/login',
        headers:{
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({username:username, password:password})
      };
    return axios.request(config)
}

export function logout(){
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/auth/logout',
        headers: { 
          'Cookie': 'hola=1'
        }
      };
    return axios.request(config)
}