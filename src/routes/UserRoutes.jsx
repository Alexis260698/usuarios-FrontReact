import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../Components/layout/Navbar";

export const UserRoutes = ({login, handlerLogOut}) => {
    return(<>
    
    <Navbar login={login} handlerLogOut = {handlerLogOut}/>
    <Routes>   
        <Route path="users" element={ <UsersPage /> }/>
        <Route path="/" element={ <Navigate to="/users" /> }/>
    </Routes>
    
    </>);
}