import { Navigate } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children }: any) {
    if (user) return <Navigate to={{ pathname: loggedInPath }} />;
    else return children;
}

export function ProtectedRoute({ user, children }: any) {
    if (user) return children;
    else
        return (
            <Navigate
                state={{ from: location }}
                to={{
                    pathname: "signin"
                }}
            />
        );
}
