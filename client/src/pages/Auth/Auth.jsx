import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Auth.css";
import Logo from "../../Images/logo1.png";
import { logIn, signUp } from "../../actions/AuthActions";


const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(true);
  const dispatch = useDispatch()
  
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
    e.preventDefault();
    if(isSignUp) {
      data.password === data.confirmpassword
        ? dispatch(signUp(data))
        : setConfirmPassword(false);
    } else {
      dispatch(logIn(data));
  };
}

  // Reset Form
  const resetForm = () => {
    setConfirmPassword(true);
    setData(initialStates);
  };

  return (
    <div className="Auth">
      <div className="auth-body">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
      {/* Top side */}
      <div className="top">
        <div className="Webname">
          <h1><img src={Logo} alt="" /> HIT ME UP</h1>
          <h6>Let's connect and share, the world is a lovely place to share.</h6>
        </div>
      </div>
      {/* Buttom side */}
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
                fontSize: "14px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                setIsSignUp((prev) => !prev); resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account click here to 'LOGIN'"
                : "Don't have an account click here to 'SIGN UP'"}
            </span>
            <button
              className="button infoButton"
              type="Submit"
            >
              { isSignUp ? "Register" : "Login"}
            </button>
        </form>
      </div>      
    </div>
  );
};

export default Auth;
