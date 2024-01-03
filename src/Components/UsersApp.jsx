import { UserForm } from "./UserForm";
import { UsersList } from "./UserList";

export const UsersApp = () => {


    const initialUsers = [
        {
            id: 1,
            username: 'pepe',
            password: '12345',
            email: 'pepe@correo.com'
        },
    ];


    return (
        <div className="container my-4">
            <h2>Users App</h2>

            <div className="row">

                <div className="col">
                    <UserForm></UserForm>
                </div>
                <div className="col">
                    <UsersList users={initialUsers}></UsersList>
                </div>
            </div>
        </div>
    );
}