import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target: any): any {
    const [content, setContent] = useState<any[]>([]);
    const { firebase } = useContext(FirebaseContext);

    const db = getFirestore(firebase);

    useEffect(() => {
        const q = query(collection(db, target));

        getDocs(q)
            .then((snapshot) => {
                const allContent = snapshot.docs.map((contentObj: any) => ({
                    ...contentObj.data(),
                    docId: contentObj.id
                }));

                setContent(allContent);
            })
            .catch((error: any) => {
                console.log(error.message);
            });
    }, []);

    return { [target]: content };
}
