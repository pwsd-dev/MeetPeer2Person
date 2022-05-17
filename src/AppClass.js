import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { observer } from "mobx-react";

import {
  Authorization,
  Login,
  ChangePassword,
  Home,
  HomeClass,
  WeatherPage,
  Landing,
  About,
  AboutLanding,
  Feedback,
  ContactsBeforeAuth,
  ContactsAfterAuth,
  FeedbackBeforeAuth,
} from "./pages";

import "./scss/app.scss";

@observer
export default class AppClass extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Landing />} exact />
        <Route path="/aboutLanding" element={<AboutLanding />} exact />
        <Route path="/auth" element={<Authorization />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/changePassword" element={<ChangePassword />} exact />
        {/* <Route path="/home" element={<Home />} exact /> */}
        <Route path="/home" element={<HomeClass />} exact />
        <Route path="/weather" element={<WeatherPage />} exact />
        <Route path="/feedback" element={<Feedback />} exact />
        <Route
          path="/feedbackBeforeAuth"
          element={<FeedbackBeforeAuth />}
          exact
        />
        <Route
          path="/ContactsAfterAuth"
          element={<ContactsAfterAuth />}
          exact
        />
        <Route
          path="/ContactsBeforeAuth"
          element={<ContactsBeforeAuth />}
          exact
        />
      </Routes>
    );
  }
}
