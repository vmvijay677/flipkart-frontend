import React, { useState, useContext } from "react";
import "./LoginDialog.css";
import Dialog from "@mui/material/Dialog";
import Textfield from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { authenticateSignup, authenticateLogin } from "../../Service/Api";
import { DataContext } from "../../Context/DataProvider";

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Signup",
    subHeading: "Signup with your details to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [signup, setSignup] = useState(signupInitialValues);
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const { setAccount } = useContext(DataContext);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const backToLogin = () => {
    toggleAccount(accountInitialValues.login);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.username);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  const guestLogin = () => {
    setLogin({
      username: "guest_user",
      password: "guest",
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <div className="login-component">
        <div className="login-image">
          <h5 className="login-heading">{account.heading}</h5>
          <p className="login-subheading">{account.subHeading}</p>
        </div>

        {account.view === "login" ? (
          <div className="login-wrapper">
            <Textfield
              variant="standard"
              name="username"
              label="Enter Username"
              onChange={(e) => onValueChange(e)}
              value={login.username}
            />
            <br></br>
            {error && (
              <p className="login-error">
                Please enter valid username or password
              </p>
            )}
            <Textfield
              type="password"
              variant="standard"
              label="Enter Password"
              name="password"
              onChange={(e) => onValueChange(e)}
              value={login.password}
            />
            <p className="login-content">
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </p>
            <Button id="loginButton" onClick={() => loginUser()}>
              Login
            </Button>
            <Button id="guestloginButton" onClick={() => guestLogin()}>
              Login as guest
            </Button>
            <br />
            <p
              style={{
                textAlign: "center",
                color: "gray",
                fontWeight: "500",
              }}
            >
              OR
            </p>
            <Button id="request-otp">Request OTP</Button>
            <p className="create-account" onClick={() => toggleSignup()}>
              New to Flipkart? Create an account
            </p>
          </div>
        ) : (
          <div className="login-wrapper">
            <Textfield
              variant="standard"
              label="Enter Firstname"
              name="firstname"
              onChange={(e) => onInputChange(e)}
            />
            <p className="signup-input"></p>
            <Textfield
              variant="standard"
              label="Enter Lastname"
              name="lastname"
              onChange={(e) => onInputChange(e)}
            />
            <p className="signup-input"></p>
            <Textfield
              variant="standard"
              label="Enter Username"
              name="username"
              onChange={(e) => onInputChange(e)}
            />
            <p className="signup-input"></p>
            <Textfield
              variant="standard"
              label="Enter Email"
              name="email"
              onChange={(e) => onInputChange(e)}
            />
            <p className="signup-input"></p>
            <Textfield
              variant="standard"
              label="Enter Mobile Number"
              name="phone"
              onChange={(e) => onInputChange(e)}
            />
            <p className="signup-input"></p>
            <Textfield
              variant="standard"
              type="password"
              label="Enter Password"
              name="password"
              onChange={(e) => onInputChange(e)}
            />
            <p className="login-content">
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </p>
            <Button id="loginButton" onClick={() => signupUser()}>
              Continue
            </Button>
            <Button id="request-otp" onClick={() => backToLogin()}>
              Existing User? Login
            </Button>
          </div>
        )}
      </div>
    </Dialog>
  );
};

export default LoginDialog;
