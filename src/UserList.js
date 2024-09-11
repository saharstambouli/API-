import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";
import UserCard from "./UserCard";

const UserList = () => {

    const [userList, setUserList] = useState([])

    const getUsers = async () => {
        try {

            const users = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUserList(users.data)

        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    console.log('userList', userList)


    return (
        <div className="container">
            <h1 className="title">Users List</h1>
            <ul className="user-list">

                {
                    userList?.length ?
                        userList.map((user, i) => (
                            <div key={i} className="col-md-3 col-sm-12 my-3 mx-3">
                                <UserCard {...user} />
                            </div>
                        )) :
                        <h1> Loading... </h1>
                }
       
                  </ul>
        </div>
    );
};


export default UserList;