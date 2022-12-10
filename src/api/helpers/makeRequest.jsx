export default function makeRequest(url = 'http://makefriendsback.promo-miner.art/test_main/', data = {}, baseUrl = '') {
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      Authorization: 'token b9112e99755195021fdd6e7dfb91080b1653a56a',
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    // body: JSON.stringify(),
  }).then((response) => {
    if (response.status !== 200) {
      return response.text().then(function (text) {
        throw new Error(text);
      });
    }
    return response.json();
  });
}

var url = 'http://makefriendsback.promo-miner.art/test_main/';

var xhr = new XMLHttpRequest();
xhr.open('POST', url);

// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
// xhr.setRequestHeader("Access-Control-Allow-Methods", ("POST", "GET", "PUT"));
// xhr.setRequestHeader("Accept", "application/json");
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.setRequestHeader(
//   "Authorization",
//   "token b9112e99755195021fdd6e7dfb91080b1653a56a"
// );

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(xhr.status);
    console.log(xhr.responseText);
  }
};

// var data =
//   '{"Autorization": "token b9112e99755195021fdd6e7dfb91080b1653a56a"}';

// xhr.send(data);

// const reqURl = "http://faceprog.ru/js-frontend-api/";
// const reqURl = "http://makefriendsback.promo-miner.art/test_main/";
// function sendReq(method, url, body = null) {
//   const headers = {
//     // "access-control-allow-origin ": "*",
//     // "Host": "makefriendsback.promo-miner.art",
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization: "token b9112e99755195021fdd6e7dfb91080b1653a56a",
//   };
//   return fetch(url, {
//     method: method,
//     body: JSON.stringify(body),
//     headers: headers,
//   }).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     return res.json().then((err) => {
//       const e = new Error("Что то не так1");
//       e.data = err;
//       throw e;
//     });
//   });
// }
// const body = {
//   Autorization: "token b9112e99755195021fdd6e7dfb91080b1653a56a",
// };
// sendReq("POST", reqURl, body);

/*
  async function testArticlesModel(){
    let articles = await ArticlesModel.getArticles();
    console.log('articles count = ' + articles);
  }
  
  testArticlesModel().then(()=>{
            
  }).catch((e)=>{
      //  `<p>${e.message}</p>`;
      console.log(e);
  });
 
*/

// const instance = axios.create({
//   baseURL: "http://makefriendsback.promo-miner.art/test_main/",
//   headers: { Authorization: "b9112e99755195021fdd6e7dfb91080b1653a56a" },
// });

// const getItems = async (e) => {
//   const baseURL = await axios
//     .get(`http://makefriendsback.promo-miner.art/test_main/`)
//     .then(({ data }) => console.log(data));
// };

// axios({
//   url: "http://makefriendsback.promo-miner.art/test_main/",
//   method: "POST",
//   headers: {
//     Autorization: "token b9112e99755195021fdd6e7dfb91080b1653a56a",
//     "Content-Type": "application/json",
//     // Vary: "Accept",
//   },

//   mode: "no-cors",
//   // body: JSON.stringify(data),
//   // credentials: "include",
// }).then((res) => {
//   console.log(res);
// });

// getItems();

/* СТАРАЯ ШКОЛА НА VANNILA JS
var url = "http://makefriendsback.promo-miner.art/test_main/";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Authorization", "token b9112e99755195021fdd6e7dfb91080b1653a56a");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = '{"Autorization": "token b9112e99755195021fdd6e7dfb91080b1653a56a"}';

xhr.send(data);
*/
/* Старая версия на Promise .then*/
// export default function makeRequest(url, options = {}){
//     if(!('headers' in options)){
//         options.headers = {};
//     }
//     //  "WWW-Authenticate": "b9112e99755195021fdd6e7dfb91080b1653a56a",
//     options.headers.Autorization = 'b9112e99755195021fdd6e7dfb91080b1653a56a';
//     /*return fetch(url, options).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         return data;
//     });
//     */
//     return fetch(url, options).then((response)=>{
//         if( response.status !== 200){
//             return response.text().then((text)=>{
//                 throw new Error(text);
//             })
//         }
//         return response.json();
//     });
// }
