import { observable, computed, action } from "mobx";
import { postData } from "../api/postData.jsx";

const apiItems = postData("http://makefriendsback.promo-miner.art/test_main/");

// apiItems
//   .then((data) => {
//     // console.log(data[0].data.name);
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

class Items {
  // @observable items = apiItems.then((data) => console.log(data));

  @observable items = [];
}

// function

// function getItems() {
//   return [
//     {
//       id: 100,
//       title: "Iphone x",
//       price: 58999,
//       rest: 54,
//       current: 1,
//     },

//     {
//       id: 101,
//       title: "Iphone 8",
//       price: 39900,
//       rest: 15,
//       current: 1,
//     },
//   ];
// }

export default new Items();
