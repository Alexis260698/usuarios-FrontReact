import { UsersList } from "../Components/UserList";
import { useUser } from "../hooks/useUsers";
import { UselModalForm } from "../Components/UserModalForm";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";





export const UsersPage = () => {

    const {
        users,
        visibleForm,
        handlerOpenForm,
    } = useContext(UserContext);

    return (
        <>


            {!visibleForm ||
                <UselModalForm />
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
                            : <UsersList/>
                        }
                    </div>
                </div>
            </div >
        </>
    );
}