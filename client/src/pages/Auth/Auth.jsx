import React, { useState, useNavigate, useDispatch } from "react";
import "./Auth.css";
import Logo from "../../Images/logo1.png";
/*import { logIn, signUp } from "../../actions/AuthActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";*/

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);
  /*const navigate = useNavigate();
  const dispatch = useDispatch()*/
  const initialStates = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
  };
  const [data, setData] = useState(initialStates);

  // handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Form Submission
  const handleSubmit = (e) => {
    /*setConfirmPassword(true);*/
    e.preventDefault();
    if(isSignUp) {
      if(data.password !== data.confirmpassword)
      {
        setConfirmPassword(false)
      }
      /*data.password === data.confirmpassword
        ? dispatch(signUp(data, navigate))
        : setConfirmPassword(false);
    } else {
      dispatch(logIn(data, navigate));
    */}
  };

  // Reset Form
  const resetForm = () => {
    setConfirmPassword(true);
    setData(initialStates);
  };

  {/*
  const loading = useSelector((state) => state.authReducer.loading);
  
  

  // const dispatch = useDispatch()
  

  */}

  return (
    <div className="Auth">
      {/* left side */}
      {/*<div className="a-right">
        <form className="infoForm authForm">
          <h3>{isSignUp ? "Register" : "Login"}</h3>
          <div>
          <input
                required
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
              />
          <input
                required
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
              />
          </div>
          <div>
          <input
                required
                type="text"
                placeholder="Username"
                className="infoInput"
                name="username"
              />
          </div>
          <div>
          <input
                required
                type="text"
                placeholder="Password"
                className="infoInput"
                name="password"
              />
          <input
                required
                type="text"
                placeholder="Confirm Password"
                className="infoInput"
                name="confirmpassword"
              />
          </div>
          <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}>
              Already have an account Login
            </span>
            <button
              className="button infoButton"
              type="Submit"
            >
              SignUp
            </button>
        </form>
            </div>*/}

      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h3>{isSignUp ? "Register" : "Login"}</h3>
          {isSignUp && (
            <div>
              <input
                required
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <input
              required
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              required
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {isSignUp && (
              <input
                required
                type="password"
                className="infoInput"
                name="confirmpassword"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}
          </div>
          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPassword ? "none" : "block",
            }}
          >
           * Confirm password is not the same
          </span>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                setIsSignUp((prev) => !prev); resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account Login"
                : "Don't have an account Sign up"}
            </span>
            <button
              className="button infoButton"
              type="Submit"
              /*disabled={loading}*/
            >
              {/*loading ? "Loading..." :*/ isSignUp ? "SignUp" : "Login"}
            </button>
        </form>
      </div>

      {/* right form side */}

      <div className="a-left">
        <img src={Logo} alt="" />

        <div className="Webname">
          <h1>HIT ME UP</h1>
          <h6>Let's connect and share, the world is a lovely place to share.</h6>
        </div>
      </div>

      
    </div>
  );
};

function LogIn(){
  return (
  <div className="a-right">
        <form className="infoForm authForm">
          <h3>Login</h3>
          <div>
          <input
                required
                type="text"
                placeholder="Username"
                className="infoInput"
                name="username"
              />
          </div>
          <div>
          <input
                required
                type="text"
                placeholder="Password"
                className="infoInput"
                name="password"
              />
          </div>
          <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}>
              Don't have an account Sign Up
            </span>
            <button
              className="button infoButton"
              type="Submit"
            >
              Login
            </button>
        </form>
      </div>
)}

export default Auth;
