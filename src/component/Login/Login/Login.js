import React, { useContext, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Grid,
} from "@mui/material";

import login from "../../../images/login.png";
import "./Login.css";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {
  const { signIn, createUser, googleSignIn, setUser, updateName } =
    useContext(AuthContext);
  const [newUser, setNewUser] = useState(false);
  const [loginData, setLoginData] = useState({
    isSignin: false,
    displayName: "",
    email: "",
    password: "",
    password2: "",
    newUser: false,
    sucess: false,
    error: "",
  });
  console.log(loginData);
  let navigate = useNavigate();
  const handleLoginSubmit = (e) => {
    if (newUser && loginData.email && loginData.password) {
      createUser(loginData.email, loginData.password)
        .then((result) => {
          const newUserInfo = { ...loginData };
          newUserInfo.sucess = true;
          newUserInfo.error = "";
          setLoginData(newUserInfo);
          updateName(newUserInfo.displayName);
          setUser(newUserInfo);
          navigate("/doctor/dashboard", { replace: true });
        })
        .catch((error) => {
          const newUserInfo = { ...loginData };
          newUserInfo.sucess = false;
          newUserInfo.error =
            "This Email Address is already used in Another account";
          setLoginData(newUserInfo);
        });
    }
    if (!newUser && loginData.email && loginData.password) {
      signIn(loginData.email, loginData.password)
        .then(() => {
          const newUserInfo = { ...loginData };
          newUserInfo.sucess = true;
          newUserInfo.error = "";
          setLoginData(newUserInfo);
          setUser(newUserInfo);
          navigate("/doctor/dashboard", { replace: true });
        })
        .catch((error) => {
          const newUserInfo = { ...loginData };
          newUserInfo.sucess = false;
          newUserInfo.error = "Wrong Email or Password";
          setLoginData(newUserInfo);
        });
    }
    e.preventDefault();
  };
  const handleOnChange = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[feild] = value;

    setLoginData(newLoginData);
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((response) => {
        const user = response.user;
        setUser(user);
        navigate(-2, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            {newUser && (
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Name"
                type="text"
                name="displayName"
                onBlur={handleOnChange}
                variant="standard"
              />
            )}
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onBlur={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onBlur={handleOnChange}
              variant="standard"
            />
            {newUser && (
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Retype Password"
                type="password"
                name="password2"
                onBlur={handleOnChange}
                variant="standard"
              />
            )}
            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            {!newUser ? (
              <Button variant="text" onClick={() => setNewUser(!newUser)}>
                New User? Please Register
              </Button>
            ) : (
              <Button variant="text" onClick={() => setNewUser(!newUser)}>
                Already Registered? Please Login
              </Button>
            )}
            {loginData.sucess && (
              <Alert className="text-center text-success">
                User Logged in successfully
              </Alert>
            )}
            {loginData.error && <Alert>{loginData.error}</Alert>}

            <div className="devide">
              <span></span>
              <p>or</p>
              <span></span>
            </div>

            <button className="googleLogin" onClick={handleGoogleSignIn}>
              CONTINUE WITH GOOGLE
            </button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={login} alt="" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
