import React, { useContext, useEffect, useRef, useState } from 'react';

import axios from 'axios';


import Head from "./ui/Header";



const Users = () => {
    const Token = localStorage.Token
    console.log('userPage',Token);
    const [userList, setUserList] = useState([])
    

    useEffect(() => {
        axios({
            method:'GET',
            url: 'http://121.196.148.127:8080/api/user/page',
            headers: {
                'Content-Type': 'application/json',
                'Token': Token
            },
            // params: {userName: 'admin'}
        }).then(res => {
                console.log(res.data);
                setUserList(res.data.data.content)
            })
    }, [])

    console.log(userList[0]);
    
    return (
        <div>
            <Head />
            <div>{userList[0]}</div>
        </div>
    );
}

export default Users;