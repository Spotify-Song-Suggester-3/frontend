import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import "../App.css";
// import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "react-spinkit";
import axiosWithAuth from '../utils/axiosWithAuth';



const WholeForm = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, red, purple, #ff0040, #550a8a);
  background-size: 400% 400%;
  animation: gradient 30s ease infinite;
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
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-size: 0.8em;
  position: relative;
  margin-top: 2%;
  width: 100%;
  height: 7vh;
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
const Button1 = styled.button`
  border: none;
  background-color: white;
  width: 100%;
`;

const Register = ({ values, errors, touched, status }) => {
  const [toggled, setToggled] = useState(false);
  const [lastname, setLastname] = useState(false);
  const [usernam, setUsernam] = useState(false);
  const [emai, setemai] = useState(false);
  const [passwor, setPasswor] = useState(false);
  const [passworComfirm, setPassworComfirm] = useState(false);

  const [users, setUsers] = useState([]);
         useEffect(() => {

        status && setUsers(users => [
            ...users, status
        ]);
    }, [status]);



  return (
    <WholeForm>
      <Display>
        <Form>
          <h2>Register</h2>
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
          <Button type="submit">Sign Up</Button>
        </Form>
        <Link to="/">
          <Button1 className="button">Already have an account? Sign In</Button1>
        </Link>
      </Display>
    </WholeForm>
  );
};

const ForMikRegister = withFormik({
  mapPropsToValues({
    username,
    email,
    password,
    firstName,
    lastName,
 
  }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      firstName: firstName || "",
      lastName: lastName || "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is Required"),
    email: Yup.string()
      .email()
      .required("Email is Required"),
    password: Yup.string()
      // .min(5)
      // .max(50)
      .required("Password is Required"),
      firstName: Yup.string().required("First Name is Required"),
      lastName: Yup.string().required("Last Name is Required"),

  }),
  handleSubmit(values, { props, setStatus, resetForm }) {
    console.log("submitting", values);
    axiosWithAuth()
      .post('/auth/signup',values)
      .then(res => {
        setStatus(res.data);
        resetForm();
        props.history.push('/');
        console.log("REGISTER",res);
      })
      .catch(error => console.log(error.res));
    console.log("submitted First name:", values.firstName);
    console.log("submitted Last name:", values.lastName);
    console.log("submitted email:", values.email);
    console.log("submitted username:", values.username);
    console.log("submitted password:", values.password);
   
  }
})(Register);

export default ForMikRegister;