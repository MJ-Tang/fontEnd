import {  Layout, } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { Select } from 'antd';

import './Header.css'

const { Option } = Select;
const { Header } = Layout;

const HeadM = () => {
    const Token = localStorage.Token
    const userType = localStorage.userType
    const userName = localStorage.userName
    console.log('header', userType, userName);
    // console.log('header',Token);

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
                localStorage.clear()
                history.push('/loginm')
            })
    }

    const handleChange = (value) => {
        const page = value
        console.log('selected ',page);
        if (page === 'export') {
            history.push('/download')
        } else {
            history.push('/importExcel')
        }
    };

    return (
        <Layout className="layout">
            <Header className='df'>
                {/* {(() => {
                    if (userType == 0 ) {
                        return (
                            <NavLink className="logo" to='/home'>
                                索赔数据整合系统
                            </NavLink>
                        )
                    }else {
                        return (
                            <NavLink className="logo" to='/index'>
                                    索赔数据整合系统
                            </NavLink>
                        )
                    }
                })()} */}
                <NavLink className="logo" to='/indexm' >
                    索赔数据整合系统
                </NavLink>
                <div className='df'>
                    {/* <NavLink to='/home' className='nav'>首页</NavLink> */}
                    <div className='nav'>{userName}</div>
                    {/* <NavLink to='/download' className='nav'>导出</NavLink> */}

                    <div className='nav click' onClick={logOut} >登出</div>
                </div>
            </Header>
        </Layout>
    );
}

export default HeadM;