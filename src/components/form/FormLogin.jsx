import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

function FormLogin({ handleClick }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            user: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/home");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == "auth/wrong-password") {
          alert("Неправильный пароль");
        } else if (errorCode == "auth/user-not-found") {
          alert("Пользователь не найден");
        } else {
          alert(errorMessage);
        }
      });
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Введите верный email")
      .required("Обязательное поле"),
    password: yup
      .string()
      .min(6, "В пароле должно не меньше 6 символов")
      .matches(/[A-Z]/, "Пароль должен содержать заглавную букву")
      .typeError(`Должно быть строкой`)
      .required("Обязательное поле"),
  });

  let initialValues = {
    name: "",
    email: "",
    password: "",
  };

  // const isValues = localStorage.getItem("email");

  // if (isValues) {
  //   initialValues.email = isValues;
  // }

  // let handleChangeTwo = (e) => {
  //   localStorage.setItem(e.target.value, "email");
  // };

  return (
    <div className="container-form">
      <Formik
        initialValues={initialValues}
        validateOnBlur
        onSubmit={(values) => {
          let { email, password } = values;
          handleLogin(email, password);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className={`form`}>
            <p className="page__text-32-Bold">Вход</p>
            <p>
              <input
                className={`input`}
                type={`text`}
                name={`email`}
                onChange={((e) => setEmail(e.target.value), handleChange)}
                onBlur={handleBlur}
                value={values.email}
                placeholder={"E-mail"}
              />
            </p>
            {touched.email && errors.email && (
              <span className={`error`}>{errors.email}</span>
            )}
            <p>
              <input
                className={`input`}
                type={`password`}
                name={`password`}
                onChange={((e) => setPassword(e.target.value), handleChange)}
                onBlur={handleBlur}
                value={values.password}
              />
            </p>
            {touched.password && errors.password && (
              <span className={`error`}>{errors.password}</span>
            )}
            <button
              className={"button"}
              disabled={!isValid && !dirty}
              onClick={(() => handleClick(email, password), handleSubmit)}
              type={`button`}
              onKeyUp={(() => handleClick(email, password), handleSubmit)}
              // onPress={() => setFieldValue((email, password), handleSubmit)}
              // onPress={handleSubmit}
            >
              Войти
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default FormLogin;
