import { UserRow } from "./userRow"

export const UsersList = ({ users }) => {
    return (

        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Update</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map( ({ id, usename, email}) => (
                        <UserRow
                            key={id}
                            id={id}
                            usename={name}
                            email={email}></UserRow>
                    ))
                }
            </tbody>
        </table>

    )

}