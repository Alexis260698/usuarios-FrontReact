import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../Components/layout/Navbar";
import { RegisterPage } from "../pages/RegisterPage";
import { useUser } from "../hooks/useUsers";

export const UserRoutes = ({ login, handlerLogOut }) => {
    const {
        users,
        userSelected,
        initialUserForm,
        handlerAddUser,
        visibleForm,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
    } = useUser();

    return (<>

        <Navbar login={login} handlerLogOut={handlerLogOut} />
        <Routes>
            <Route path="users" element={<UsersPage
                users={users}
                userSelected={userSelected}
                initialUserForm={initialUserForm}
                handlerAddUser={handlerAddUser}
                visibleForm={visibleForm}
                handlerRemoveUser={handlerRemoveUser}
                handlerUserSelectedForm={handlerUserSelectedForm}
                handlerOpenForm={handlerOpenForm}
                handlerCloseForm={handlerCloseForm}
            />} />
            <Route path="users/register" element={<RegisterPage
                handlerAddUser={handlerAddUser}
                initialUserForm={initialUserForm} />} />
            <Route path="user/update/:id" element={<RegisterPage
                users={users}
                handlerAddUser={handlerAddUser}
                initialUserForm={initialUserForm} />} />

            <Route path="/" element={<Navigate to="/users" />} />
        </Routes>

    </>);
}