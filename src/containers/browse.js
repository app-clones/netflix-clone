import React, { useContext, useEffect, useState } from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";

export function BrowseContainer({ slides }) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        console.log("profile", profile);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        // eslint-disable-next-line
    }, [profile.displayName]);

    return <SelectProfileContainer user={user} setProfile={setProfile} />;
}
