import React, { useState } from "react";
import { withFormik, Form as Form1, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import "../App.css";
import { Link } from "react-router-dom";
// import axios from "axios";
import {connect} from "react-redux";
import axiosWithAuth from "../utils/axiosWithAuth";
import {setUserID} from "../actions/index";

const WholeForm = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, red, purple, #ff0040, #550a8a);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
`;
const Display = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  width: 600px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 42px 55px 45px 55px;
  margin-bottom: 10%;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-size: 0.8em;
  position: relative;
  margin-top: 5%;
  width: 100%;
  height: 5vh;
`;
const Button = styled.button`
  width: 80%;
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
const Button1 = styled.button`
  border: none;
  background-color: white;
  width: 100%;
`;
const H1 = styled.h1`
  color: white;
  width: 100%;
`;

const Login = ({ values, errors, touched, status, handleSubmit }) => {
  const [usernam, setUsernam] = useState(false);
  const [passwor, setPasswor] = useState(false);
  return (
    <WholeForm>
      <H1>Spotify Song Suggester</H1>
      <Display>
        <Form1 onSubmit = {handleSubmit}>
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
          <Button1>Don't have an account? Sign Up</Button1>
        </Link>
      </Display>
    </WholeForm>
  );
};

const ForMikLogin = withFormik({
  mapPropsToValues: ({ username, password })=>({
    
      username: username || "",
      password: password || ""
    }),
  
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Name is Required"),
    password: Yup.string()
      .required("Password is Required")
  }),
  handleSubmit(values, { props, setStatus, resetForm }) {
    axiosWithAuth()
      .post(
        '/auth/signin', values)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        // console.log("LOGIN RES",res.data);
        props.setUserID(res.data.id);
        console.log("LOGIN USER ID",res.data)
        props.history.push("/dashboard")
      })
      .catch(error => console.log(error.response));
  }
})(Login);

export default connect (null, {setUserID})(ForMikLogin);