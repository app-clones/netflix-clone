import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function HeaderContainer({ children }: any) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>
                    Sign In
                </Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}
