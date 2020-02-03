import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import '../App.css';
import axios from "axios";
import { Link } from 'react-router-dom';


const WholeForm = styled.div`
    width: 100%;  
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: linear-gradient(purple, red);
`
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
`
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
    text-align:center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
`

const Register = ({ values, errors, touched, status}) => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        console.log("status change", status)
        status && setUsers( users =>
            [...users, status])

    }, [status]);
    

return (
    <WholeForm>
        <Display>
        <Form>
        <h2>Register</h2>
        <Label htmlFor="username">
                Username:               
                    <Field className="border" id="username" type="text" name="username" placeholder="username"/>
                    {touched.username && errors.username && (
                        <p className="hasError">{errors.username}</p>
                    )}
        </Label>
        <Label htmlFor="email">
                email:               
                    <Field className="border" id="email" type="text" name="email" placeholder="email"/>
                    {touched.email && errors.email && (
                        <p className="hasError">{errors.email}</p>
                    )}
        </Label>
        <Label htmlFor="password">
                Password:               
                    <Field className="border" id="password" type="text" name="password" placeholder="password"/>
                    {touched.password && errors.password && (
                        <p className="hasError">{errors.password}</p>
                    )}
        </Label>
        <Label htmlFor="password">
                Password Confirm:               
                    <Field className="border" id="passwordconfirm" type="text" name="passwordconfirm" placeholder="password confirm"/>
                    {touched.passwordconfirm && errors.passwordconfirm && (
                        <p className="hasError">{errors.passwordconfirm}</p>
                    )}
        </Label>
        <Button type="submit">Sign Up</Button>
        </Form>
        <Link to="/">
        <button>Already have an account? Sign In</button>
        </Link>
        </Display>
    </WholeForm>
    );
};

const ForMikRegister = withFormik({
    mapPropsToValues({ username, email, password, passwordconfirm}){
        return {
            username: username || "",
            email: email || "",
            password: password || "",
            passwordconfirm: passwordconfirm || ""
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup
        .string()
        .required("Username is Required"),
        email: Yup
        .string()
        .email()
        .required("Email is Required"),
        password: Yup
        .string()
        .min(8)
        .max(16)
        .required("Password is Required"),
        passwordconfirm: Yup
        .string()
        .oneOf([Yup.ref('password'), null])
        .required('Password must Match')
    }),
    handleSubmit(values, {setStatus, resetForm}) {
        console.log("submitting", values);
        axios.post("https://spotify-song-suggester-3.herokuapp.com/", values)
        .then(response => {

        })
        .catch(error => console.log(error.response))
        console.log("submitted email:", values.email)
        console.log("submitted username:", values.username)
        console.log("submitted password:", values.password)
        console.log("password matches:", values.passwordconfirm)
    }
})(Register);

export default ForMikRegister;
