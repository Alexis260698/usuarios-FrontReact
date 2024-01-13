import { NavLink } from "react-router-dom";

export const UserRow = ({ handlerUserSelectedForm, handlerRemoveUser, id, username, email }) => {

    const onRemoveUser = (id) => {
        handlerRemoveUser(id);
    }


    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handlerUserSelectedForm(
                        {
                            id,
                            username,
                            email,

                        })}>
                    Update
                </button>
            </td>
            <td>
                <NavLink className = {'btn btn-secondary btn-sm'}
                to= {'/user/update/' + id}> 
                UpdateV2
                </NavLink>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => onRemoveUser(id)}>
                    Remove
                </button></td>
        </tr>
    )
}