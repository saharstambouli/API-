import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
    const [listOfUser, setListOfUser] = useState([]);

    useEffect(() => {


        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setListOfUser(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div>

            <h1>Users List</h1>
            <ul>
                {listOfUser.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};
export default UserList;