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

export const UsersApp = () => {

    const[users, dispatch] = useReducer(usersReducer, initialUsers);

    const handlerAddUser = (user) => {
        dispatch({
            type: 'addUser',
            payload: user,
        })
    }

    return (
        <div className="container my-4">
            <h2>Users App</h2>

            <div className="row">

                <div className="col">
                    <UserForm handlerAddUser= { handlerAddUser } ></UserForm>
                </div>
                <div className="col">
                    <UsersList 
                    users={users}
                    ></UsersList>
                </div>
            </div>
        </div>
    );
}