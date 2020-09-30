import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTES from "./constants/routes";

export default function App() {
    return (
        <Router>
            <Route exact path={ROUTES.BROWSE}>
                <Browse />
            </Route>
            <Route exact path={ROUTES.SIGN_UP}>
                <Signup />
            </Route>
            <Route exact path={ROUTES.SIGN_IN}>
                <Signin />
            </Route>
            <Route exact path={ROUTES.HOME}>
                <Home />
            </Route>
        </Router>
    );
}
