
import { useAuth } from "../auth/hooks/useAuth";
import { LoginPage } from "../auth/pages/LoginPage";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "./layout/Navbar";




export const UsersApp = () => {

    const {login, handlerLogin, handlerLogOut} = useAuth();
    
    return (<>
        {login.isAuth
            ? (
                <>
                    <Navbar login={login} handlerLogOut = {handlerLogOut}/>
                    <UsersPage />
                </>
            )
            : <LoginPage handlerLogin={handlerLogin} />}

    </>);
}