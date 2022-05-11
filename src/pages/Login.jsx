import React from "react";
import FormLogin from "../components/form/FormLogin";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import HeaderLanding from "../components/header/HeaderLanding";

function Login() {
  return (
    <div className="wrapper">
      <HeaderLanding />
      <div className="wrapper-form">
        <FormLogin></FormLogin>
      </div>
    </div>
  );
}

export default Login;
