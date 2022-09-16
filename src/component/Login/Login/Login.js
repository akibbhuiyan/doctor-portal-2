import React, { useContext, useState } from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert, Grid } from '@mui/material';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import login from '../../../images/login.png'
import './Login.css'
import { firebaseConfig } from './Firebase/Firebase.config';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../../App';
initializeApp(firebaseConfig);

const Login = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
    const [newUser, setNewUser] = useState(false)
    const [loginData, setLoginData] = useState({
        isSignin: false,
        email: '',
        password: '',
        password2: '',
        newUser: false,
        sucess: false,
        error: ''
    })
    const auth = getAuth();
    let navigate = useNavigate();
    const handleLoginSubmit = (e) => {
        if (newUser && loginData.email && loginData.password) {
            createUserWithEmailAndPassword(auth, loginData.email, loginData.password)
                .then((result) => {
                    const newUserInfo = { ...loginData }
                    newUserInfo.sucess = true;
                    newUserInfo.error = '';
                    setLoginData(newUserInfo)
                    setUserLoggedIn(newUserInfo)
                    navigate("/doctor/dashboard", { replace: true });
                })
                .catch((error) => {
                    const newUserInfo = { ...loginData }
                    newUserInfo.sucess = false;
                    newUserInfo.error = 'This Email Address is already used in Another account';
                    setLoginData(newUserInfo)
                });
        }
        if (!newUser && loginData.email && loginData.password) {
            signInWithEmailAndPassword(auth, loginData.email, loginData.password)
                .then(() => {
                    const newUserInfo = { ...loginData }
                    newUserInfo.sucess = true;
                    newUserInfo.error = '';
                    setLoginData(newUserInfo)
                    setUserLoggedIn(newUserInfo)
                    navigate('/doctor/dashboard', { replace: true });
                })
                .catch((error) => {
                    const newUserInfo = { ...loginData }
                    newUserInfo.sucess = false;
                    newUserInfo.error = 'Wrong Email or Password';
                    setLoginData(newUserInfo)
                });
        }
        e.preventDefault()
    }
    const handleOnChange = (e) => {
        const feild = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[feild] = value;
        setLoginData(newLoginData)
    }
    console.log(loginData)
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6} >
                    <Typography variant='body1' gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id='standard-basic'
                            label='Your Email'
                            name='email'
                            onBlur={handleOnChange}
                            variant='standard' />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id='standard-basic'
                            label='Your Password'
                            type='password'
                            name='password'
                            onBlur={handleOnChange}
                            variant='standard' />
                        {
                            newUser && <TextField
                                sx={{ width: '75%', m: 1 }}
                                id='standard-basic'
                                label='Retype Password'
                                type='password'
                                name='password2'
                                onBlur={handleOnChange}
                                variant='standard' />
                        }
                        <Button sx={{ width: '75%', m: 1 }} type='submit' variant='contained'>Login</Button>
                        {
                            !newUser ? <Button variant='text' onClick={() => setNewUser(!newUser)}>New User? Please Register</Button> : <Button variant='text' onClick={() => setNewUser(!newUser)}>Already Registered? Please Login</Button>

                        }
                        {
                            loginData.sucess && <Alert className='text-center text-success'>User Logged in successfully</Alert>
                        }
                        {
                            loginData.error && <Alert>{loginData.error}</Alert>
                        }

                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" style={{ width: '100%' }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;