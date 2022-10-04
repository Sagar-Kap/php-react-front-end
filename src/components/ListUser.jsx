import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('https://1857666.xyz/users/users/').then(function(response) {
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`https://1857666.xyz/users/user/${id}/delete`).then(function(response){
            getUsers();
        });
    }
    return (
        <div>
            <h1>List Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}