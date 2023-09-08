import {  useUser} from "../AuthProvider.jsx";
import {Navigate} from "react-router-dom";


export const PrivateRoute = ({ children }) => {
    const user = useUser();
    console.log(user)
    if (!user) {
        return <Navigate to="/logowanie" />
    }

    return <>{children}</>;
}