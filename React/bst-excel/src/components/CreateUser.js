import React,{useState} from 'react';
import { Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './Login.css'
import 'antd/dist/antd.css';

import Head from "./ui/Header";

const CreateUser = () => {
    const Token = localStorage.Token
    console.log(Token);

    const [enteredUserValue, setUserValue] = useState('');
    const [enteredPasswordValue, setPasswordValue] = useState('');
    // check is value enpty
    const [isValid, setisValid] = useState(true);

    console.log('user',enteredUserValue);
    console.log('pass',enteredPasswordValue);

    const getUserName = e => {
        if (e.target.value.trim().length > 0) {
            setisValid(true)
        }
        setUserValue(e.target.value)
    }

    const getPassword = e => {
        if (e.target.value.trim().length > 0) {
            setisValid(true)
        }
        setPasswordValue(e.target.value)
    }

    const history = useHistory();

    const creatUser = () => {
        const user = { accountName:enteredUserValue, password:enteredPasswordValue,userName:enteredUserValue }
        console.log(user);

        axios({
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Token': Token
            },
            url: 'http://121.196.148.127:8080/api/user/add',
            data: user
            // params: use
        })
            .then(res => {
                console.log(res);
                if (res.data.code === 200) {
                    history.push('/users')
                }else {
                    // alert('wrong userName or password')
                    console.log('worng');
                }
            })
    }

    return (
        <div>
            <Head />
            <div className='login'>
                <h1 className='mb20'>创建用户</h1>
                <Input 
                    size="large" 
                    placeholder="请输入用户名" 
                    prefix={<UserOutlined />} 
                    className="mb20" 
                    onChange={getUserName}
                />

                <Input 
                    size="large" 
                    placeholder="请输入密码" 
                    prefix={<LockOutlined />} 
                    className="mb20"
                    onChange={getPassword}
                />

                <Button 
                    type="primary" 
                    className='loginButton'
                    onClick={creatUser}
                >
                    创建用户
                </Button>
            </div>
        </div>
    );
}
 
export default CreateUser;