// eslint-disable-next-line react/prop-types
import {createContext, useContext, useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./firebase.js";

const UserContext = createContext(null)
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    // nie rozumiem propsów children, skąd sa?
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        });
    }, [])
    return (
        <UserContext.Provider value={user}>{children}</UserContext.Provider>
    //     UserContext jest kontekstem React, który będzie przechowywać informacje o zalogowanym użytkowniku i udostępniać je innym komponentom.
    )
}

export const useUser = () => useContext(UserContext);
// useContext(UserContext) = UserContext.Consumer ?
//est to hook niestandardowy, który używa hooka useContext do uzyskania dostępu do wartości user przechowywanej w kontekście UserContext. Ta funkcja pozwala innym komponentom na dostęp do informacji o zalogowanym użytkowniku.