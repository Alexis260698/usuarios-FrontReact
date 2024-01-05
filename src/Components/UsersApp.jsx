import { UserForm } from "./UserForm";
import { UsersList } from "./UserList";
import { useUser } from "../hooks/useUsers";




export const UsersApp = () => {

    const {
        users,
        userSelected,
        initialUserForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
    } = useUser();

    return (
        <div className="container my-4">
            <h2>Users App</h2>

            <div className="row">

                <div className="col">
                    <UserForm
                        handlerAddUser={handlerAddUser}
                        initialUserForm={initialUserForm}
                        userSelected={userSelected}
                    ></UserForm>
                </div>
                <div className="col">
                    {users.length === 0
                        ? <div className="alert alert-warning">No hay usuarios</div>
                        : <UsersList
                            handlerUserSelectedForm={handlerUserSelectedForm}
                            users={users}
                            handlerRemoveUser={handlerRemoveUser}
                        ></UsersList>
                    }

                </div>
            </div>
        </div>
    );
}