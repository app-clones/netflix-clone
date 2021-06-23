import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function SignUp() {
    const history = useHistory();

    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInvalid =
        firstName === "" || password === "" || emailAddress === "";

    const handleSignup = (event: any) => {
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result: any) => {
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1
                    })
                    .then(() => {
                        history.push(ROUTES.BROWSE);
                    });
            })
            .catch((error: any) => {
                setEmailAddress("");
                setFirstName("");
                setPassword("");
                setError(error.message);
            });
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            // @ts-ignore
                            placeholder="First Name"
                            value={firstName}
                            onChange={({ target }: any) =>
                                setFirstName(target.value)
                            }
                        />
                        <Form.Input
                            // @ts-ignore
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({ target }: any) =>
                                setEmailAddress(target.value)
                            }
                        />
                        <Form.Input
                            // @ts-ignore
                            placeholder="Password"
                            type="password"
                            value={password}
                            autocomplete="password"
                            onChange={({ target }: any) =>
                                setPassword(target.value)
                            }
                        />
                        <Form.Submit
                            data-testid="sign-up"
                            disabled={isInvalid}
                            type="submit"
                        >
                            Sign Up
                        </Form.Submit>

                        <Form.Text>
                            Already a user?{" "}
                            <Form.Link to={ROUTES.SIGN_IN}>
                                Sign in now.
                            </Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure
                            you're not a bot. Learn more.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}
