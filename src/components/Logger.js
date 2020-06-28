import React, { useState } from "react";
import { Link } from "react-router-dom";

const Logger = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleOnChangeUsername = (event) => setUsername(event.target.value);
    const handleonChangePassword = (event) => setPassword(event.target.value);
    const handleLogIn = async () => {
        console.log(`username: ${username}\npassword: ${password}`);
        if (username.length === 0) {
            alert("Enter your username please");
            return;
        } else if (password.length === 0) {
            alert("Enter your password please");
            return;
        }

        /* Envio los datos al servidor y si los datos son validos entonces cambiar screen */
        let data = await fetch("http://localhost:3333/users/", {
            method: "GET",
            mode: "cors",
        });
        let response = await data.json();
        let userdata = response.filter(v => v.username === username);
        if(userdata.length === 0) return;
        props.handleSetData(userdata);
    };
    return (
        <React.Fragment>
            <div className="box-header">LOG IN</div>
            <div className="box-body">
                <form className="login-form">
                    <div className="input-container">
                        <input
                            className="input-text"
                            type="text"
                            placeholder="enter your username"
                            onChange={handleOnChangeUsername}
                        />
                    </div>
                    <div className="input-container">
                        <input
                            className="input-text"
                            type="password"
                            placeholder="enter your password"
                            onChange={handleonChangePassword}
                        />
                    </div>
                </form>
            </div>
            <div className="box-footer">
                <div className="button-container">
                    <button onClick={handleLogIn}>Already!</button>
                </div>
                <div className="link-container">
                    <Link className="link" to="/register">
                        Sign in up
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Logger;
