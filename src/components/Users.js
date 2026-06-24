import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
     
        //  async function fetchUsers() {
        //     try{
        //         const response = await getUsers();
        //         setUsers(response.data);
        //     }
        //     catch(error) {
        //         console.log(error);
        //     }
        //  };
        //  fetchUsers();
        
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(response=> response.json())
        // .then(data => setUsers(data));


        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers(response.data));


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