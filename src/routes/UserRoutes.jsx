import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../Components/layout/Navbar";
import { RegisterPage } from "../pages/RegisterPage";
import { useUser } from "../hooks/useUsers";
import { UserProvider } from "../context/userProvider";

export const UserRoutes = ({ login, handlerLogOut }) => {
    

    return (<>
        <UserProvider >
        <Navbar login={login} handlerLogOut={handlerLogOut} />
        <Routes>
            <Route path="users" element={<UsersPage/>} />
            <Route path="users/register" element={<RegisterPage/>} />
            <Route path="user/update/:id" element={<RegisterPage/>} />

            <Route path="/" element={<Navigate to="/users" />} />
        </Routes>
        </UserProvider>

    </>);
}