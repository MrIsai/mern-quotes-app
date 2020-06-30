import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NavbarComponent as Navbar } from "./components/Navbar";
import auth from "./scripts/auth"; /* Unica instancia del authenticator para toda la app */

function App() {
    const [registed, setRegisted] = useState(auth.isAuthenticated());

    /* Cambia el estado para si esta registrado o no */
    const handleSetRegister = () => setRegisted(!registed);

    useEffect(() => {
        if (registed) console.log("%cRegistered", "color:green; font-weight: bold");
        else console.log("%cRegistered", "color:red; font-weight: bold");
    }, [registed]);

    return (
        <div className="App">
            <Router>
                <Navbar auth={registed} />
                <Switch>
                    <Route exact path="/">
                        <Register
                            handleRegisterState={handleSetRegister}
                            auth={auth}
                        />
                    </Route>
                    <ProtectedRoute auth={auth} exact path="/home">
                        <Home />
                    </ProtectedRoute>
                    <ProtectedRoute auth={auth} exact path="/about">
                        <About />
                    </ProtectedRoute>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
