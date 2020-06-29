import React, { useEffect, useState } from "react";
import auth from "../auth";
import { Login } from "../components/login-component";
import "../styles/Register.css";
import { Signin } from "../components/signin-component";

export const Register = (props) => {
    const [toSignin, setToSignIn] = useState(false);

    useEffect(() => {
        let r = auth.isAuthenticated();
        console.log(r);
    }, []);
    return (
        <div className="Register centered">
            <h1>Register</h1>
            {toSignin ? <Signin /> : <Login />}
            <hr />
            <div className="footer">
                <button
                    onClick={() => setToSignIn(!toSignin)}
                    className="register-button"
                >
                    {toSignin ? "Log in" : "Sign in"}
                </button>
            </div>
        </div>
    );
};
