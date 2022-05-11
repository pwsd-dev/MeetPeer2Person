import axios from "axios";
const SECRET_TOKEN = "token b9112e99755195021fdd6e7dfb91080b1653a56a";
const server = axios.create({
  baseURL: "http://makefriendsback.promo-miner.art/test_main",
  // baseURL: "http://faceprog.ru/js-frontend-api/",
  mode: "no-cors",
});

server.interceptors.request.use(function (request) {
  // if(localStorage.getItem('token'))
  request.headers["X-Custom-Header"] = "foobar";
  // request.headers.Authorization = SECRET_TOKEN;
  return request;
});

server.interceptors.response.use(function (response) {
  // if(localStorage.getItem('token'))

  if (response.status !== 200) {
    throw new Error(response.data);
  }
  // if(typeof response.data !== 'object'){
  //   throw new Error('we did not get json object from server ');
  // }

  return response;
});

export default server;
