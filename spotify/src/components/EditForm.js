import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import "../App.css";
import { Spinner } from "react-spinkit";
import axiosWithAuth from '../utils/axiosWithAuth';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';

const EditForm = ({ values, errors, touched, status }) => {
  const [toggled, setToggled] = useState(false);
  const [lastname, setLastname] = useState(false);
  const [usernam, setUsernam] = useState(false);
  const [emai, setemai] = useState(false);
  const [passwor, setPasswor] = useState(false);

  const [users, setUsers] = useState([]);
    useEffect(() => {
      status && setUsers(users => [
            ...users, status
        ]);
    }, [status]);

  return (
  
        <Form className = "profile-form">
          <h6>Edit Your Profile:</h6>
         
            <Field
              onFocus={() => setToggled(!toggled)}
              className= "profile-div"
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
              className="profile-div"
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
              className="profile-div"
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
              className="profile-div"
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
              className="profile-div"
              id="password"
              type="text"
              name="password"
              placeholder="password"
            />
            {touched.password && errors.password && (
              <p className="hasError">{errors.password}</p>
            )}
    
          <Button type="submit">Save</Button>
        </Form>
     
  );
};

const FormikUpdateForm = withFormik({
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
      .min(5)
      .max(50)
      .required("Password is Required"),
      firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),

  }),
 
  handleSubmit(values, { props, setStatus, resetForm}) {
    console.log("submitting", values);
    alert('profile updated!')
    axiosWithAuth()
      .put(`https://spotify-song-suggester-3.herokuapp.com/api/users/${props.userID}`,values)
      .then(res => {
        // setStatus(res.data);
       console.log(res.data)
        console.log("UPDATED PROFILE",res);
      })
      .catch(error => console.log(error.res));
   
  }
})(EditForm);

const mapStateToProps = state => {
    return {
        userID: state.userID
    };
};

export default connect(mapStateToProps, {})(FormikUpdateForm);