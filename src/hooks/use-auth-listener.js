import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

// custom hook
export default function useAuthListener() {

    const [ user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if(authUser) {
                // necessário json stringify para setar no localStorage, e parse no get
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        })
        // cleanup the listener
        return () => listener();
    }, [])

    return { user };
}
