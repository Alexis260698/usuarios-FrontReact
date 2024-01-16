import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "./AuthContext";

export const Authprovider = ({ children }) => {

    const { login, handlerLogin, handlerLogOut } = useAuth();

    return (
        <AuthContext.Provider value={
            {
                login,
                handlerLogin,
                handlerLogOut
            }
        }>
            {children}
        </AuthContext.Provider>
    );
}