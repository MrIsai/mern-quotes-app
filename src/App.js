import React from "react";
import { Switch, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

function App() {
    return(
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Register />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
