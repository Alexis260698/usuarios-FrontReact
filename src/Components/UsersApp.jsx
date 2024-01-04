import { useReducer } from "react";
import { UserForm } from "./UserForm";
import { UsersList } from "./UserList";
import { usersReducer } from "../reducers/usersReducer";


const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },
];

const initialUserForm = {
    username: '',
    password: '',
    email: '',
}

export const UsersApp = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);

    const handlerAddUser = (user) => {
        dispatch({
            type: 'addUser',
            payload: user,
        })
    }

    const handlerRemoveUser = (id) => {
        dispatch({
            type: 'removeUser',
            payload: id,
        })
    }

    return (
        <div className="container my-4">
            <h2>Users App</h2>

            <div className="row">

                <div className="col">
                    <UserForm
                        handlerAddUser={handlerAddUser}
                        initialUserForm={initialUserForm}
                    ></UserForm>
                </div>
                <div className="col">
                    {users.length === 0
                        ? <div className="alert alert-warning">No hay usuarios</div>
                        : <UsersList
                            users={users}
                            handlerRemoveUser={handlerRemoveUser}
                        ></UsersList>
                    }

                </div>
            </div>
        </div>
    );
}