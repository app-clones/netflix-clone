import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

export default function App() {
    // TODO: Add Firebase user here
    const user = {};

    return (
        <Router>
            <IsUserRedirect
                user={user}
                loggedInPath={ROUTES.BROWSE}
                path={ROUTES.SIGN_IN}
            >
                <Signin />
            </IsUserRedirect>

            <IsUserRedirect
                user={user}
                loggedInPath={ROUTES.BROWSE}
                path={ROUTES.SIGN_UP}
            >
                <Signup />
            </IsUserRedirect>

            <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                <Browse />
            </ProtectedRoute>

            <IsUserRedirect
                user={user}
                loggedInPath={ROUTES.BROWSE}
                path={ROUTES.HOME}
                exact
            >
                <Home />
            </IsUserRedirect>
        </Router>
    );
}
