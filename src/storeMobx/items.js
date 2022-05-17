import { observable, computed, action } from "mobx";

class Items {
  @observable items = getItems();
}

function getItems() {
  return [
    {
      id: 100,
      title: "Iphone x",
      price: 58999,
      rest: 54,
      current: 1,
    },

    {
      id: 101,
      title: "Iphone 8",
      price: 39900,
      rest: 15,
      current: 1,
    },
  ];
}

export default new Items();
