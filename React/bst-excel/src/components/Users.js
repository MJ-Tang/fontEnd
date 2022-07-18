import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';


import Head from "./ui/Header";


import './Home.css'


const Users = () => {
    const Token = localStorage.Token
    console.log('userPage',Token);
    const [data, setData] = useState( [{
        productId: '123',
        productName: 'macbook'
        }] );

    const [isLoading, setIsLoading] = useState(false);
    const [id, setId] = useState('')
    const history = useHistory()

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
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
                setData(res.data.data.content)
                setIsLoading(false);
            })
        }
        fetchData();
    }, [])

    const deleteUser = (e) => {
        const id = e.currentTarget.getAttribute('data-name')
        // console.log(e.currentTarget.getAttribute('data-name'));
        console.log(id);
        axios({
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'Token': Token
            },
            url: 'http://121.196.148.127:8080/api/user/delete',
            params: {userId:id}
            // params: use
        })
            .then(res => {
                console.log(res);
                if (res.data.code === 200) {
                    window.location.reload()
                }else {
                    // alert('wrong userName or password')
                    console.log('worng');
                }
            })
    }

    const createUser = () => {
        history.push('/createUser')
    }
    
    return (
        <div>
            <Head />
            <div className='mt20 mb20'>
                <button className='button  mlr40' onClick={createUser}>创建用户</button>
            </div>

            <div className='tableTop df mlr40'>
                <div className='item'>用户名</div>
                <div className='item'>身份</div>
                <div className='item'>操作</div>
            </div>
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <div>
                    {data.map(i => (
                        <div className='table df mlr40' key={i.userId}>
                            <div className='item'>{i.userName}</div>
                            <div className='item'>{i.accountName}</div>
                            <div className='item edit'>
                            {(() => {
                                if (i.userId != 1 ) {
                                    return <button data-name={i.userId} onClick={deleteUser} className='button'>删除</button>
                                } else {
                                    return <div>-</div>
                                }
                            })()}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Users;