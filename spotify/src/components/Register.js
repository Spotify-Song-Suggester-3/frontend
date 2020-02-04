import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "react-spinkit";

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

const Register = ({ values, errors, touched, status }) => {
  const [toggled, setToggled] = useState(false);
  const [lastname, setLastname] = useState(false);
  const [usernam, setUsernam] = useState(false);
  const [emai, setemai] = useState(false);
  const [passwor, setPasswor] = useState(false);
  const [passworComfirm, setPassworComfirm] = useState(false);

  return (
    <WholeForm>
      <Display>
        <Form>
          <h2>Register</h2>
          <Label htmlFor="firstName">
            <Field
              onFocus={() => setToggled(!toggled)}
              className={`border ${toggled ? "toggled" : ""}`}
              id="firstName"
              type="text"
              name="firstName"
              placeholder="first name"
            />
            {touched.firstName && errors.firstName && (
              <p className="hasError">{errors.firstName}</p>
            )}
          </Label>
          <Label htmlFor="lastName">
            <Field
              onFocus={() => setLastname(!lastname)}
              className={`border ${lastname ? "toggled" : ""}`}
              id="lastName"
              type="text"
              name="lastName"
              placeholder="last name"
            />
            {touched.lastName && errors.lastName && (
              <p className="hasError">{errors.lastName}</p>
            )}
          </Label>
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
          <Label htmlFor="email">
            <Field
              onFocus={() => setemai(!emai)}
              className={`border ${emai ? "toggled" : ""}`}
              id="email"
              type="text"
              name="email"
              placeholder="email"
            />
            {touched.email && errors.email && (
              <p className="hasError">{errors.email}</p>
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
          <Label htmlFor="passwordconfirm">
            <Field
              onFocus={() => setPassworComfirm(!passworComfirm)}
              className={`border ${passworComfirm ? "toggled" : ""}`}
              id="passwordconfirm"
              type="text"
              name="passwordconfirm"
              placeholder="password confirm"
            />
            {touched.passwordconfirm && errors.passwordconfirm && (
              <p className="hasError">{errors.passwordconfirm}</p>
            )}
          </Label>
          <Button type="submit">Sign Up</Button>
        </Form>
        <Link to="/">
          <button className="button">Already have an account? Sign In</button>
        </Link>
      </Display>
    </WholeForm>
  );
};

const ForMikRegister = withFormik({
  mapPropsToValues({
    firstName,
    lastName,
    username,
    email,
    password,
    passwordconfirm
  }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      username: username || "",
      email: email || "",
      password: password || "",
      passwordconfirm: passwordconfirm || ""
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    username: Yup.string().required("Username is Required"),
    email: Yup.string()
      .email()
      .required("Email is Required"),
    password: Yup.string()
      .min(6)
      .max(16)
      .required("Password is Required"),
    passwordconfirm: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    )
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
    axios
      .post(
        "https://spotify-song-suggester-3.herokuapp.com/api/auth/signup",
        values
      )
      .then(response => {
        console.log(response.data);
        console.log(response);
      })
      .catch(error => console.log(error.response));
    console.log("submitted First name:", values.firstName);
    console.log("submitted Last name:", values.lastName);
    console.log("submitted email:", values.email);
    console.log("submitted username:", values.username);
    console.log("submitted password:", values.password);
    console.log("password matches:", values.passwordconfirm);
  }
})(Register);

export default ForMikRegister;
