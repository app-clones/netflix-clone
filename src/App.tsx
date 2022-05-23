import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
    const { user } = useAuthListener();
    console.log(user);

    return (
        <Router>
            <Routes>
                <Route
                    path={ROUTES.HOME}
                    element={
                        <IsUserRedirect
                            user={user}
                            loggedInPath={ROUTES.BROWSE}
                            exact
                        >
                            <Home />
                        </IsUserRedirect>
                    }
                />

                <Route
                    path={ROUTES.BROWSE}
                    element={
                        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                            <Browse />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path={ROUTES.SIGN_IN}
                    element={
                        <IsUserRedirect
                            user={user}
                            loggedInPath={ROUTES.BROWSE}
                            path={ROUTES.SIGN_IN}
                        >
                            <SignIn />
                        </IsUserRedirect>
                    }
                />

                <Route
                    path={ROUTES.SIGN_UP}
                    element={
                        <IsUserRedirect
                            user={user}
                            loggedInPath={ROUTES.BROWSE}
                            path={ROUTES.SIGN_UP}
                        >
                            <SignUp />
                        </IsUserRedirect>
                    }
                />
            </Routes>
        </Router>
    );
}
