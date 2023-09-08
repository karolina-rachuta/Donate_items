// eslint-disable-next-line react/prop-types
import {createContext, useContext, useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./firebase.js";

const UserContext = createContext(null)
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        });
    }, [user])
    return (
        <UserContext.Provider value={user}>{children}</UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);