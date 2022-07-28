import React, { useState, useEffect } from "react";
import Head from "./ui/Header";
import { useLocation } from "react-router-dom";
import axios from "axios";

import './Details.css'

const Details = () => {
    const Token = localStorage.Token
    console.log('details',Token);

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery()
    const id = query.get('id')
    console.log(id);


    const [data, setData] = useState( [{
        productId: '123',
        productName: 'macbook'
        }] );

    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => { 
            const result = await axios({
                method:'GET',
                url: 'http://120.48.80.204:8080//api/excel/page',
                headers: {
                    'Content-Type': 'application/json',
                    'Token': Token
                },
                // params: {userName: 'admin'}
            }).then(res => {
                    // console.log(res.data.data.content);
                    // setList(res.data.data.content)
                    let detail = res.data.data.content
                    console.log('id',id);
                    
                    for (let i = 0; i < detail.length; i++) {
                        if (detail[i].id == id) {
                            detail = detail[i]
                        }
                        // console.log(detail[i].id);
                    }
                    console.log('detail',detail);

                    setData(detail)
                    setIsLoading(false);
                })
        }
        fetchData();

    },[])
    

    return (
        <div>
            <Head />
            <div className="content">
                <h1 className="ta">索赔详情</h1>
                {isLoading ? (
                    <div>Loading ...</div>
                ) : (
                    <div>
                        <div className="ddf">
                            <h3 className="title">索赔月份: </h3>
                            <div className="form">
                                <h3>{data.importDate}</h3>
                            </div>
                        </div>

                        <div className="ddf">
                            <h3 className="title">bu: </h3>
                            <div className="form">
                                <h3>{data.bu}</h3>
                            </div>
                        </div>

                        <div className="ddf">
                            <h3 className="title">订单号: </h3>
                            <div className="form">
                                <h3>{data.claimsCount}</h3>
                            </div>
                        </div>

                        <div className="ddf">
                            <h3 className="title">款号: </h3>
                            <div className="form">
                                <h3>{data.styleNumbe}</h3>
                            </div>
                        </div>

                        <div className="ddf">
                            <h3 className="title">生产工厂: </h3>
                            <div className="form">
                                <h3>{data.factory}</h3>
                            </div>
                        </div>

                        <div className="ddf">
                            <h3 className="title">绣花工厂: </h3>
                            <div className="form">
                                <h3>{data.embroiderFactory}</h3>
                            </div>
                        </div>

                        <div className="ddf">
                            <h3 className="title">绣花工厂: </h3>
                            <div className="form">
                                <h3>{data.embroiderFactory}</h3>
                            </div>
                        </div>
                        
                        <div className="ddf">更多字段对接中</div>


                        <div className="ddf">
                            <h3 className="title">穿着过: </h3>
                            <div className="form">
                            <select>
                                <option value ="volvo">否</option>
                                <option value ="saab">是</option>
                            </select>
                            </div>
                        </div>

                        <div className="ddf">
                            <h3 className="title">尺码: </h3>
                            <div className="form">
                                <input type="text" placeholder="请输入尺码" />
                            </div>
                        </div>

                        <div className="ddf">
                            <h3 className="title">问题: </h3>
                            <div className="form">
                                <input type="text" placeholder="请输入问题" />
                            </div>
                        </div>

                        <div className="ddf">
                            <h3 className="title">图片: </h3>
                            <div className="form">
                                <img src={data.photo} alt="" srcset="" className='item-img' />
                            </div>
                            <div>上传功能暂未实现</div>
                        </div>

                        <div className="ddf">
                            <button className="title">取消</button>
                            <button className="button">更新信息</button>
                            <div>更新接口暂未对接</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Details;