import { useContext } from "react"
import { UserRow } from "./userRow"
import { UserContext } from "../context/UserContext"

export const UsersList = () => {
    const {users} = useContext(UserContext);
    
    return (

        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Update</th>
                    <th>UpdateV2</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map( ({ id, username, email}) => (
                        <UserRow
                            key={id}
                            id={id}
                            username={username}
                            email={email}
                            ></UserRow>
                    ))
                }
            </tbody>
        </table>

    )

}