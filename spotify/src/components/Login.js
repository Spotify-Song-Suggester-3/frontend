import React, { useState, useEffect } from "react";
import { withFormik, Form as Form1, Field } from "formik";
import * as Yup from "yup";
import styled, { keyframes } from "styled-components";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";

const WholeForm = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: linear-gradient(purple, red);
`;
const Display = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  width: 500px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 42px 55px 45px 55px;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-size: 0.8em;
  position: relative;
  margin-top: 5%;
`;
const Button = styled.button`
  width: 200px;
  background: linear-gradient(purple, red);
  font-weight: 600;
  color: white;
  cursor: pointer;
  margin: 20px;
  height: 50px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  &:hover {
    background: linear-gradient(red, purple);
  }
`;

const Login = ({ values, errors, touched, status }) => {
  const [usernam, setUsernam] = useState(false);
  const [passwor, setPasswor] = useState(false);
  return (
    <WholeForm>
      <Display>
        <Form1>
          <h2>Welcome</h2>
          <p>Hello, welcome back please log in</p>

          <Label htmlFor="username">
            <Field
              onFocus={() => setUsernam(!usernam)}
              className={`border ${usernam ? "toggled" : ""}`}
              id="username"
              type="text"
              name="username"
              placeholder="username"
            />
            {touched.username && errors.username && (
              <p className="hasError">{errors.username}</p>
            )}
          </Label>
          <Label htmlFor="password">
            <Field
              onFocus={() => setPasswor(!passwor)}
              className={`border ${passwor ? "toggled" : ""}`}
              id="password"
              type="text"
              name="password"
              placeholder="password"
            />
            {touched.password && errors.password && (
              <p className="hasError">{errors.password}</p>
            )}
          </Label>
          <Button type="submit">LOG IN</Button>
        </Form1>
        <Link to="/register">
          <button className="button">Don't have an account? Sign Up</button>
        </Link>
      </Display>
    </WholeForm>
  );
};

const ForMikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Name is Required"),
    password: Yup.string()
      .min(8)
      .max(16)
      .required("Password is Required")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post(
        "https://spotify-song-suggester-3.herokuapp.com/api/auth/signin",
        values
      )
      .then(response => {
        console.log(response.data);
        console.log(response);
      })
      .catch(error => console.log(error.response));
    console.log("submitted email:", values.username);
    console.log("submitted password:", values.password);
  }
})(Login);

export default ForMikLogin;
