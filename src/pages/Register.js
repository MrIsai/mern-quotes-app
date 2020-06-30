import React, { useState } from "react";
import { Login } from "../components/Login";
import "../styles/Register.css";
import { Signin } from "../components/Signin";
import { Redirect } from "react-router-dom";

export const Register = (props) => {
    const [toSignin, setToSignIn] = useState(false);

    if (props.auth.isAuthenticated()) return <Redirect push to="/home" />;

    return (
        <div className="Register centered">
            <h1>Register</h1>
            {toSignin ? (
                <Signin {...props} />
            ) : (
                <Login {...props} />
            )}
            <hr />
            <div className="footer">
                <button
                    onClick={() => setToSignIn(!toSignin)}
                    className="register-button"
                >
                    {toSignin ? "Back" : "Sign in"}
                </button>
            </div>
        </div>
    );
};
