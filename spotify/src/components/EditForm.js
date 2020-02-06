import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import "../App.css";
// import axios from "axios";
import { useParams } from "react-router-dom";
import { Spinner } from "react-spinkit";
import axiosWithAuth from '../utils/axiosWithAuth';
import {connect} from 'react-redux';


const EditForm = ({ values, errors, touched, status }) => {
  const [toggled, setToggled] = useState(false);
  const [lastname, setLastname] = useState(false);
  const [usernam, setUsernam] = useState(false);
  const [emai, setemai] = useState(false);
  const [passwor, setPasswor] = useState(false);
  const [passworComfirm, setPassworComfirm] = useState(false);
const {userID} = useParams();

  const [users, setUsers] = useState([]);
         useEffect(() => {

        status && setUsers(users => [
            ...users, status
        ]);
    }, [status]);



  return (
  
        <Form>
          <h2>Edit Your Profile!</h2>
         
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
    
          <button type="submit">Sign Up</button>
        </Form>
     
  );
};

const FormikUpdateForm = withFormik({
  mapPropsToValues({
    firstName,
    lastName,
    username,
    email,
    password,
    userID
    // passwordconfirm
  }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      username: username || "",
      email: email || "",
      password: password || "",
      // passwordconfirm: passwordconfirm || ""
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
      .min(5)
      .max(50)
      .required("Password is Required"),
    // passwordconfirm: Yup.string().oneOf(
    //   [Yup.ref("password"), null],
    //   "Passwords must match"
    // )
  }),
  
  handleSubmit(values, { props, setStatus, resetForm }) {
    console.log("submitting", values);
  
    axiosWithAuth()
      .put(`https://spotify-song-suggester-3.herokuapp.com/api/users/${props.userID}`,values)
      .then(res => {
        // setStatus(res.data);
       console.log(res.data)
        // props.history.push('/');
        console.log("UPDATED",res);
      })
      .catch(error => console.log(error.res));
    console.log("submitted First name:", values.firstName);
    console.log("submitted Last name:", values.lastName);
    console.log("submitted email:", values.email);
    console.log("submitted username:", values.username);
    console.log("submitted password:", values.password);
   
  }
})(EditForm);

const mapStateToProps = state => {
    return {
        userID: state.userID
    };
};

export default connect(mapStateToProps, {})(FormikUpdateForm);