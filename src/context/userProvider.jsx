import { useUser } from "../hooks/useUsers";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {

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

    return (
        <UserContext.Provider value={
            {
                users,
                userSelected,
                initialUserForm,
                handlerAddUser,
                visibleForm,
                handlerRemoveUser,
                handlerUserSelectedForm,
                handlerOpenForm,
                handlerCloseForm,
            }
        }>
            {children}

        </UserContext.Provider>
    );
}