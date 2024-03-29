import React,{useState} from 'react';
import { Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './Login.css'
import 'antd/dist/antd.css';


const Login = () => {

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

    const login = () => {
        const use = { userName:enteredUserValue, userPass:enteredPasswordValue }
        console.log(use);

        axios({
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            url: 'http://120.48.80.204:8080/api/login',
            params: use
        })
            .then(res => {
                console.log(res);
                let Token = res.data.data.token.replace(/['"]+/g, '')
                let userType = res.data.data.userDto.type
                let userName = res.data.data.userDto.userName
                console.log(userType);
                console.log(res.data.data.userDto.userName);
                localStorage.setItem("Token",Token)
                localStorage.setItem("userType",userType)
                localStorage.setItem('userName',userName)
                if (res.data.code === 200) {
                    history.push('/index')
                    // if (userType == 0) {
                    //     history.push('/home')
                    // } else {
                    //     history.push('/index')
                    // }
                }else {
                    // alert('wrong userName or password')
                    console.log('worng');
                }
            })
    }


    return ( 
        <div className='login'>
            <h1 className='mb20'>索赔数据整合系统</h1>
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
                onClick={login}
            >
                登录
            </Button>

        </div>
    );
}

export default Login;