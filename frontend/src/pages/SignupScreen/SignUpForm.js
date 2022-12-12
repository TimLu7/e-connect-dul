//Chun-Wei Tseng

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function SignUpForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    const [isConfirmPassword, setIsConfirmPassword] = useState(true);
    const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);

    const navigate = useNavigate();
    const [isRegistered, setIsRegistered] = useState(false);
    async function handleRegister(e) {
        e.preventDefault();
        if (password !== passwordTwo) {
            setIsConfirmPassword(false);
            setTimeout(() => {
                setIsConfirmPassword(true);
            }, 2000);
            console.log("Passwords are different, Please reenter");
        } else {
            setIsConfirmPassword(true);
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
                    console.log("signup complete", res.ok);
                    if (res.isRegistered) {
                        setIsRegistered(true);
                    } else {
                        setIsSignUpSuccess(true);
                    }
                    setTimeout(() => {
                        navigate("/login");
                    }, 2000);
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
                        onChange={(e) => setPassword(e.target.value)}
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
                        onChange={(e) => setPasswordTwo(e.target.value)}
                        type="password"
                        className="form-control signup-input"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={passwordTwo}
                        required
                    ></input>
                    {isRegistered ? <h3>User already exists</h3> : ""}
                </div>
                {isConfirmPassword ? (
                    ""
                ) : (
                    <div class="alert alert-warning" role="alert">
                        Password doesn't match. Please Re-enter your password.
                    </div>
                )}
                {isRegistered ? (
                    <div class="alert alert-warning" role="alert">
                        User already exist. Please Login.
                    </div>
                ) : (
                    ""
                )}
                {isSignUpSuccess ? (
                    <div class="alert alert-success" role="alert">
                        Sign Up Success!
                    </div>
                ) : (
                    ""
                )}
                <button
                    id="register-button"
                    type="submit"
                    className="btn btn-primary"
                >
                    Register
                </button>
            </form>
        </>
    );
}

SignUpForm.propTypes = {};

export default SignUpForm;
