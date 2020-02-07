import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "../App.css";
import axiosWithAuth from '../utils/axiosWithAuth';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';

const EditForm = ({ values, errors, touched, status }) => {
  const [toggled, setToggled] = useState(false);
  const [lastname, setLastname] = useState(false);
  const [username, setUsername] = useState(false);
  const [email, setemail] = useState(false);
  const [password, setPassword] = useState(false);

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
              onFocus={() => setUsername(!username)}
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
              onFocus={() => setemail(!email)}
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
              onFocus={() => setPassword(!password)}
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
    username: Yup.string().required("Username Required"),
    email: Yup.string()
      .email()
      .required("Email Required"),
    password: Yup.string()
      .min(5)
      .required("Password Required"),
      firstName: Yup.string().required("First Name Required"),
    lastName: Yup.string().required("Last Name Required"),

  }),
 
  handleSubmit(values, { props, setStatus, resetForm}) {
    console.log("submitting", values);
    alert('profile updated!')
    axiosWithAuth()
      .put(`https://spotify-song-suggester-3.herokuapp.com/api/users/${props.userID}`,values)
      .then(res => {
        setStatus(res.data);
       console.log(res.data)
       resetForm();
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