import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

function FormAuthorizaton({ handleClick }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
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
        } else if (errorCode == "auth/email-already-in-use") {
          alert("такой email уже используется");
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
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Пароли не совпадают")
      .required("Обязательное поле"),
  });

  const isValues = localStorage.getItem("email");

  let initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  if (isValues) {
    initialValues.email = isValues;
  }

  let handleChangeTwo = (e) => {
    localStorage.setItem("email", e.target.value);
  };

  return (
    <div className="container-form">
      <Formik
        initialValues={initialValues}
        validateOnBlur
        onSubmit={(values) => {
          let { email, password } = values;
          handleRegister(email, password);
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
          <>
            <div className={`form`}>
              <p className="page__text-32-Bold">Регистрация</p>
              <p>
                {/* <label htmlFor={`email`}>Email</label> */}
                <input
                  className={`input`}
                  type={`text`}
                  name={`email`}
                  onChange={
                    ((e) => setEmail(e.target.value),
                    handleChange,
                    handleChangeTwo)
                  }
                  onBlur={handleBlur}
                  defaultValue={values.email}
                  placeholder={"E-mail"}
                  onPress={(() => handleClick(email, password), handleSubmit)}
                  onKeyDown={(() => handleClick(email, password), handleSubmit)}
                />
              </p>
              {touched.email && errors.email && (
                <p className={`error`}>{errors.email}</p>
              )}
              <p>
                <input
                  className={`input`}
                  type={`password`}
                  name={`password`}
                  onChange={((e) => setPassword(e.target.value), handleChange)}
                  onBlur={handleBlur}
                  value={values.password}
                  onPress={(() => handleClick(email, password), handleSubmit)}
                />
              </p>
              {touched.password && errors.password && (
                <p className={`error`}>{errors.password}</p>
              )}
              <p>
                <input
                  className={`input`}
                  type={`password`}
                  name={`confirmPassword`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  onPress={(() => handleClick(email, password), handleSubmit)}
                />
              </p>
              {touched.confirmPassword && errors.confirmPassword && (
                <p className={`error`}>{errors.confirmPassword}</p>
              )}
              <button
                className={"button page__btn-2"}
                disabled={!isValid && !dirty}
                onClick={(() => handleClick(email, password), handleSubmit)}
                type={`button`}
                onPress={(() => handleClick(email, password), handleSubmit)}
                onPress={handleSubmit}
                onKeyDown={(() => handleClick(email, password), handleSubmit)}
                onKeyUp={(() => handleClick(email, password), handleSubmit)}
              >
                Зарегистрироваться
              </button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}

export default FormAuthorizaton;
