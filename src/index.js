import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./scss/app.scss";
import App from "./App";
import AppClass from "./AppClass";
import { Provider } from "react-redux";
// import { Provider } from "mobx-react";
import { store } from "./store";
import { storeMobx } from "./storeMobx";
import "./firebase";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Provider store={storeMobx}>
        <AppClass />
      </Provider> */}
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
