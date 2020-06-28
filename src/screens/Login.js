import React from "react";
import Logger from "../components/Logger";
import Register from "../components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/Login.css";

const Login = (props) => {
    return (
        <div className="box">
            <Router>
                <Switch>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/">
                        <Logger handleSetData={(d) => props.handleSetData(d)} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Login;
