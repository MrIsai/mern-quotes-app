import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ children, auth, ...rest }) => {
    return (
        <Route {...rest}>
            {auth.isAuthenticated() ? <>{children}</> : <Redirect to="/" />}
        </Route>
    );
};
