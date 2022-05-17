import React from "react";
import HeaderMain from "../components/header/HeaderMain";
import axios from "axios";
import Items from "../storeMobx/items";
import { observer } from "mobx-react";
import { postData } from "../api/postData.jsx";

@observer
export default class HomeClass extends React.Component {
  render() {
    // let items = itemsSome.items.map((item) => {
    //   return <li>{item.title}</li>;
    // });
    let some = Items.getSomebody();
    console.log(some);
    // const getItems = postData(
    //   "http://makefriendsback.promo-miner.art/test_main/"
    // );

    // getItems
    //   .then((data) => {
    //     console.log(data[0].data.name);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    return (
      <div className="">
        <HeaderMain />
        <div className="wrapper">
          <div className="home-main-content">
            <div className="left-side">
              <div>dasasdasdasd</div>
            </div>
            <div className="right-side">
              {/* {items} */}
              {/* {itemsModel.items.map((item) => (
                <li>{item.title}</li>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
