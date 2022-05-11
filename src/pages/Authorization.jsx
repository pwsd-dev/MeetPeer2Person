import React from "react";
import FormAuthorizaton from "../components/form/FormAuthorization";
import HeaderLanding from "../components/header/HeaderLanding";
import { Link } from "react-router-dom";

function Authorization() {
  return (
    <div className="wrapper">
      <HeaderLanding />
      <div className="wrapper-form">
        <FormAuthorizaton></FormAuthorizaton>
      </div>
    </div>
  );
}

export default Authorization;
