
import React, { useState, useEffect } from 'react';
import Head from './ui/Header';
import { AudioOutlined,UploadOutlined } from '@ant-design/icons';
import { Input, Button, message, Upload } from 'antd';

import axios from 'axios';


import './Home.css'

const { Search } = Input;



const Home = () => {
    const Token = localStorage.Token
    console.log(Token);

    const [data, setData] = useState( [{
        productId: '123',
        productName: 'macbook'
        }] );

    const [List, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [id, setId] = useState('')

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => { 
            const result = await axios({
                method:'GET',
                url: 'http://121.196.148.127:8080//api/excel/page',
                headers: {
                    'Content-Type': 'application/json',
                    'Token': Token
                },
                // params: {userName: 'admin'}
            }).then(res => {
                    console.log(res.data.data.content);
                    // setList(res.data.data.content)
                    setData(res.data.data.content)
                    setIsLoading(false);
                })
        }
        fetchData();
        console.log(List);
    },[])
    

    const onSearch = (e) => console.log(e);

    const GetListId = (e) => {
        const id = e.currentTarget.getAttribute('data-name')
        // console.log(e.currentTarget.getAttribute('data-name'));
        console.log(id);
        
    }

    return ( 
        <div>
            <Head />
            <div className='df mt20 mb20 plr40'>
                <Upload>
                    <Button icon={<UploadOutlined />}>上传文件</Button>
                </Upload>
                <Search placeholder="输入订单号" onSearch={onSearch} enterButton className='ml60' />
            </div>
            <div className='tableTop df mlr40'>
                <div className='item'>索赔月份</div>
                <div className='item'>款号</div>
                <div className='item'>订单号</div>
                <div className='item'>色号</div>
                <div className='item'>生产工厂</div>
                <div className='item'>绣花工厂</div>
                <div className='item'>穿着过</div>
                <div className='item'>尺码</div>
                <div className='item'>件数</div>
                <div className='item'>问题</div>
                <div className='item'>季节</div>
                <div className='item'>图片</div>
                <div className='item'>操作</div>
            </div>
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <div>
                    {data.map(i => (
                        <div className='table df mlr40' key={i.id}>
                            <div className='item'>{i.importDate}</div>
                            <div className='item'>{i.styleNumbe}</div>
                            <div className='item'>{i.orderNumber}</div>
                            <div className='item'>{i.colorNumber}</div>
                            <div className='item'>{i.factory}</div>
                            <div className='item'>{i.embroiderFactory}</div>
                            <div className='item'>{i.isUse}</div>
                            <div className='item'>{i.size}</div>
                            <div className='item'>{i.totalCount}</div>
                            <div className='item'>{i.problem}</div>
                            <div className='item'>{i.season}</div>
                            <div className='item'>
                                <img src={i.photo} alt="" srcset="" className='item-img' />
                            </div>
                            <div className='item edit'>
                                <button data-name={i.id} onClick={GetListId} className='button'>编辑</button>
                            </div>
                            
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;