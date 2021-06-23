import { BrowserRouter as Router } from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
    const { user } = useAuthListener();

    return (
        <Router>
            <IsUserRedirect
                user={user}
                loggedInPath={ROUTES.BROWSE}
                path={ROUTES.SIGN_IN}
            >
                <SignIn />
            </IsUserRedirect>

            <IsUserRedirect
                user={user}
                loggedInPath={ROUTES.BROWSE}
                path={ROUTES.SIGN_UP}
            >
                <SignUp />
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
