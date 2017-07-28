// import axios from 'axios';
//
// const TOKEN_ONE = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9';
// const TOKEN_TWO = 'eyJpYXQiOjE0ODE4MTUyMTYsInN1YiI6InVzZXIxIn0';
// const TOKEN_THREE = 'FI8GNcXGLqOgd3j_DKzLH9ARkjojQyRH2AvhDwdHAIdrJIts_';
// const TOKEN_FOUR = 'Qjogv96blEjSv3qhFM7Dw4_lr35l4Fq8UtnQ';
// export const TOKEN = `${TOKEN_ONE}.${TOKEN_TWO}.${TOKEN_THREE}-${TOKEN_FOUR}`;
//
// export const ROOT_API = 'http://localhost:8090/api';
//
// export function authUser() {
//   axios.post(`${ROOT_API}/auth/login`,
//   { userName: 'user1', password: 'secret' })
//   .then(user => console.log('logged in: ', user));
// }
//
// export function fetchLocations() {
//   return axios.get(`${ROOT_API}/locations`,
//     { headers: { Authorization: `Bearer ${TOKEN}` } }
//   );
// }
