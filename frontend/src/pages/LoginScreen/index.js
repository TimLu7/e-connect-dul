import React from "react";
import Navigation from "../../components/Navigation";
import LoginForm from "./LoginForm.js";
import Footer from "../../components/Footer";
import "./login.css";

const LoginScreen = () => {
    return (
        <main>
            <Navigation />
            <div className="login-screen">
                <LoginForm />
            </div>
            <Footer />
        </main>
    );
};

LoginScreen.propTypes = {};
export default LoginScreen;
