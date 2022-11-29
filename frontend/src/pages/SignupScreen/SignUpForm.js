//Chun-Wei Tseng

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);

  function handleSetPassword(e) {
    setPassword(e.target.value);
  }

  function handdleSetPasswordTwo(e) {
    console.log(`password2 is equal to`, passwordTwo);
    setPasswordTwo(e.target.value);
    if (password === passwordTwo) {
      setIsConfirmPassword(true);
    } else {
      setIsConfirmPassword(false);
    }
  }
  const navigate = useNavigate();
  async function handleRegister(e) {
    e.preventDefault();
    if (password !== passwordTwo) {
      console.log("Passwords are different, Please reenter");
    } else {
      console.log("Trying to register for user");

      let user = {};

      user.username = username;
      user.email = email;
      user.password = password;
      user.firstname = "";
      user.lastname = "";
      user.phone = "";
      user.addressLOne = "";
      user.addressLTwo = "";
      user.postcode = "";
      user.addressState = "";
      user.country = "";
      user.education = "";
      console.log("User", user);
      await fetch("/signup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => {
          console.log("signup complete", res);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <>
      <form id="signup-form" onSubmit={handleRegister}>
        <h2 id="register-title">Sign Up</h2>
        <div className="form-group">
          <label className="signup-input-label" for="signUpName">
            Username:
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="form-control signup-input"
            id="signUpName"
            name="signUpName"
            placeholder="Enter Username"
            value={username}
            required
          ></input>
        </div>
        <div className="form-group">
          <label className="signup-input-label" for="signUpEmail">
            Email:
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control signup-input"
            id="signUpEmail"
            name="signUpEmail"
            placeholder="Enter Email"
            value={email}
            required
          ></input>
        </div>
        <div className="form-group">
          <label className="signup-input-label" for="signUpPassword">
            Password:
          </label>
          <input
            onChange={handleSetPassword}
            type="password"
            className="form-control signup-input"
            id="signUpPassword"
            name="signUpPassword"
            placeholder="Enter Password"
            value={password}
            required
          ></input>
        </div>
        <div className="form-group">
          <label className="signup-input-label" for="confirmPassword">
            Please re-enter your password:
          </label>
          <input
            onChange={handdleSetPasswordTwo}
            style={{
              backgroundColor: isConfirmPassword ? "white" : "pink",
            }}
            type="password"
            className="form-control signup-input"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={passwordTwo}
            required
          ></input>
        </div>
        <button id="register-button" type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </>
  );
}

SignUpForm.propTypes = {};

export default SignUpForm;
