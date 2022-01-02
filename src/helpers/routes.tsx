import { Route, Navigate } from "react-router-dom";

export var IsUserRedirect = function({ user, loggedInPath, children, ...rest }: any) {
    return (
        <Route
            {...rest}
            render={() => {
                if (!user) {
                    return children;
                }

                if (user) {
                    return (
                        <Navigate
                            to={{
                                pathname: loggedInPath
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}

export var ProtectedRoute = function({ user, children, ...rest }: any) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (user) {
                    return children;
                }

                if (!user) {
                    return (
                        <Navigate
                            state={{ from: location }}
                            to={{
                                pathname: "signin"
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}
