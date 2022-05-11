import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Authorization,
  Login,
  ChangePassword,
  Home,
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} exact />
      <Route path="/aboutLanding" element={<AboutLanding />} exact />
      <Route path="/auth" element={<Authorization />} exact />
      <Route path="/login" element={<Login />} exact />
      <Route path="/about" element={<About />} exact />
      <Route path="/changePassword" element={<ChangePassword />} exact />
      <Route path="/home" element={<Home />} exact />
      <Route path="/weather" element={<WeatherPage />} exact />
      <Route path="/feedback" element={<Feedback />} exact />
      <Route
        path="/feedbackBeforeAuth"
        element={<FeedbackBeforeAuth />}
        exact
      />
      <Route path="/ContactsAfterAuth" element={<ContactsAfterAuth />} exact />
      <Route
        path="/ContactsBeforeAuth"
        element={<ContactsBeforeAuth />}
        exact
      />
    </Routes>
    // <div className="wrapper">
    //   <div className="content">

    //     {/* <nav className="container-form container-form__nav">
    //       <Link to="/">
    //         <button className="button">Register</button>
    //       </Link>
    //       <Link to="/login">
    //         <button className="button">Login</button>
    //       </Link>
    //     </nav> */}
    //   </div>
    // </div>
  );
}

export default App;
