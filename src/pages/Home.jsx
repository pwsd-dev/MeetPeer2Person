import React from 'react';
// import WeatherComponent from "../components/weather/WeatherComponent";
import HeaderMain from '../components/header/HeaderMain';
// import WeatherPage from "../pages/WeatherPage";
// import { useAuth } from "../hooks/use-auth";
// import { Navigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from 'axios';
import { postData } from '../api/postData.jsx';
import ItemMain from '../components/itemMain/ItemMain';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../store/slices/itemsSlice';
// import Items  from '../storeMobx/items';
// import { server } from "../api/server.jsx";

// import * as ArticlesModel from "../store/articles/articles";

// var url = "http://makefriendsback.promo-miner.art/test_main/";

// var xhr = new XMLHttpRequest();
// xhr.open("POST", url);

// xhr.setRequestHeader(
//   "Authorization",
//   "token b9112e99755195021fdd6e7dfb91080b1653a56a"
// );

// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

// xhr.setRequestHeader(
//   "Access-Control-Allow-Headers",
//   "X-Requested-With, content-type"
// );

// xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
// xhr.setRequestHeader("Access-Control-Max-Age", "1800");
// xhr.setRequestHeader("Access-Control-Allow-Headers", "content-type");
// xhr.setRequestHeader("Access-Control-Allow-Methods", ("POST", "GET", "PUT"));

// xhr.setRequestHeader("Accept", "application/json");
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.setRequestHeader("Content-Type", "text/plain");

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     console.log(xhr.status);
//     console.log(xhr.responseText);
//   }
// };

// xhr.withCredentials = true;

// var data =
//   '{"Autorization" : "token b9112e99755195021fdd6e7dfb91080b1653a56a"}';

// xhr.send();

// xhr.open("POST", url);

function Home() {
  const getItems = postData('http://makefriendsback.promo-miner.art/test_main/');

  getItems.then((res) => {
    console.log(res);
  });
  React.useEffect(() => {
    dispatch(fetchItems());
  }, []);
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items);

  return (
    <div className="">
      <HeaderMain />
      <div className="wrapper">
        <div className="home-main-content">
          <div className="left-side">
            {/* {items.map((obj) => (
              <ItemMain items={items} key={`${obj.data.name}`} />
            ))} */}
          </div>
          <div className="right-side">
            {/* {items.map((obj) => (
              <ItemMain {...obj} />
            ))} */}
            <ItemMain />
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Home;
