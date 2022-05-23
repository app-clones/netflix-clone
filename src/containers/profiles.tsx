import { Header, Profiles } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function SelectProfileContainer({ user, setProfile }: any) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                </Header.Frame>
            </Header>

            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User
                        data-testid="user-profile"
                        onClick={() =>
                            setProfile({
                                displayName: user.displayName,
                                photoURL: user.photoURL
                            })
                        }
                    >
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    );
}
