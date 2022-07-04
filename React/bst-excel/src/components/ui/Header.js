import {  Layout, } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './Header.css'

const { Header } = Layout;

const Head = () => {
    const Token = localStorage.Token
    console.log('header',Token);

    const history = useHistory();
    
    const logOut = () => {
        axios({
            method:'POST',
            url: 'http://121.196.148.127:8080/api/logout',
            headers: {
                'Content-Type': 'application/json',
                'Token': Token
            },
        }).then(res => {
                console.log(res.data);
                history.push('/')
            })
    }

    return (
        <Layout className="layout">
            <Header className='df'>
                <NavLink className="logo" to='/home'>
                    索赔数据整合系统
                </NavLink>
                <div className='df'>
                    <NavLink to='/users' className='nav'>用户管理</NavLink>
                    <div className='nav' onClick={logOut}>登出</div>
                </div>
            </Header>
        </Layout>
    );
}

export default Head;