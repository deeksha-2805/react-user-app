import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
     
         async function fetchUsers() {
            try{
                const response = await getUsers();
                setUsers(response.data);
            }
            catch(error) {
                console.log(error);
            }
         };
         fetchUsers();
    },[]);

    return (
      <div>
        <h2>Users List</h2>
        {users.map((user) => (
            <p key={user.id}>
                {user.name}
                </p>
        ))}
      </div>
    );
}

export default Users;