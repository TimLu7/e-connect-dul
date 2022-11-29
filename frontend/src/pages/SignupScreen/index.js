//Chun-Wei Tseng

import React from "react";
import PropTypes from "prop-types";
import Navigation from "../../components/Navigation";
import SignUpForm from "./SignUpForm";
import Footer from "../../components/Footer";
import "./signup.css";

const SignupScreen = () => {
  return (
    <>
      <Navigation />
      <div className="signup-screen">
        <h1 className="text-center my-5">Wellcome to E-Connect</h1>
        <SignUpForm />
      </div>
      <Footer />
    </>
  );
};

SignupScreen.propTypes = {};

export default SignupScreen;
