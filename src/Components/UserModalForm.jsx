import { useContext } from "react";
import { UserForm } from "./UserForm";
import { UserContext } from "../context/UserContext";

export const UselModalForm = () => {

    const {  userSelected, handlerCloseForm  }= useContext(UserContext);

    return(
        <div className="abir-modal animacion fadeIn">
                    <div className="modal" style={ {display: "block"} } tabIndex={"-1"}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title"> {userSelected.id > 0 ? 'Editar' : 'Crear'} Modal Usuarios</h5>
                                </div>
                                <div className="modal-body">
                                    <UserForm
                                        userSelected={userSelected}
                                        handlerCloseForm={handlerCloseForm}
                                    ></UserForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}