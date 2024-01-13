import { UsersList } from "../Components/UserList";
import { useUser } from "../hooks/useUsers";
import { UselModalForm } from "../Components/UserModalForm";





export const UsersPage = ({
    users,
    userSelected,
    initialUserForm,
    handlerAddUser,
    visibleForm,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
}) => {


    return (
        <>


            {!visibleForm ||
                <UselModalForm
                    handlerAddUser={handlerAddUser}
                    initialUserForm={initialUserForm}
                    userSelected={userSelected}
                    handlerCloseForm={handlerCloseForm}
                />
            }


            <div className="container my-4">
                <h2>Users App</h2>

                <div className="row">
                    <div className="col">
                        {visibleForm ||
                            <button className="btn btn-primary my-2"
                                onClick={handlerOpenForm}
                            >Nuevo Usuario
                            </button>}
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
            </div >
        </>
    );
}