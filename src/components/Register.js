import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <React.Fragment>
            <div className="box-header">SIGN IN</div>
            <div className="box-body">
                <form className="login-form">
                    <div className="input-container">
                        <input
                            className="input-text"
                            type="text"
                            placeholder="enter a new username"
                        />
                    </div>
                    <div className="input-container">
                        <input
                            className="input-text"
                            type="password"
                            placeholder="enter a new password"
                        />
                    </div>
                    <div className="input-container">
                        <input
                            className="input-text"
                            type="password"
                            placeholder="re-enter your password"
                        />
                    </div>
                </form>
            </div>
            <div className="box-footer">
                <div className="link-container">
                    <Link className="link" to="/">
                        Back to log in
                    </Link>
                </div>

                <div>
                    <button onClick={() => console.log("Registrar")}>
                        Ok I'm ready!
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Register;
