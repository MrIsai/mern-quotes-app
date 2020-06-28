import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from "../components/Home.js";
import About from "../components/About.js";
import "../styles/Main.css";

const MainScreen = () => {
    return(
        <Router>
            <header>
                <div className="header-container">
                    <h1 className="header-title">Famous Quotes</h1>
                </div>
            </header>
            <Navbar />
            <main>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}

export default MainScreen;