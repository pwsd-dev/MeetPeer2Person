import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./scss/app.scss";
import App from "./App";
import AppClass from "./AppClass";
import { Provider } from "react-redux";
import { store } from "./store";
import "./firebase";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        {/* <App /> */}
        <AppClass />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
