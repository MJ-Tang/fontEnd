import React,{useState} from "react";

import Head from "../../ui/Header";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// ant
import { Input, Spin,  Select, message, Upload, Button, DatePicker, Space} from 'antd';
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import '../../Home.css'


const { Search } = Input;
const { Option } = Select;
const { TextArea } = Input;

const CreateData = () => {
    const Token = localStorage.Token

    let list = {
        bu: "",
        category: "",
        claimsCount: "",
        colorNumber: "",
        custom: "",
        embroiderFactory: "",
        factory: "",
        importDate: "",
        isUse: "",
        orderNumber: "",
        photo: "",
        problem: "",
        productName: "",
        season: "",
        size: "",
        stampFactory: "",
        styleNumbe: "",
        totalCount: "",
        waterFactory: ""
    }
    const enterOrderNumber = (e) => {
        list.orderNumber = e.target.value
    }

    const onChange = (date, dateString) => {
        let month = dateString
        month = month.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");
        console.log(month);
        list.importDate = month
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
        list.isUse = value
    };

    const onChanged = (e) => {
        // if (e.target.value.trim().length > 0) {
        //     setProblem(e.target.value)
        // }
        list.problem = e.target.value
    };

    const enterStyleNumbe = e => {
        list.styleNumbe = e.target.value
        // console.log(styleNumbe);
    }
    
    const enterColorNumber = e => {
        list.colorNumber = e.target.value
    }

    const enterFactory = e => {
        list.factory = e.target.value
    }

    const enterStampFactory = e => {
        list.stampFactory = e.target.value
    }

    const enterEmbroiderFactory = e => {
        list.embroiderFactory = e.target.value
    }

    const enterSize = e => {
        list.size = e.target.value
    }

    const enterClaimsCount = e => {
        list.claimsCount = e.target.value
    }


    const submitInfo = () => {
        if (list.orderNumber == '' || list.importDate == '') {
            message.error('?????????????????????????????????')
        }else {
            axios({
                method:'PUT',
                // timeout:40000,
                headers:{
                    'Content-Type': 'application/json',
                    'token': Token
                },
                url: 'http://121.196.148.127:8080/api/excel/add',
                data: list
            })
                .then(res => {
                    console.log('export',res);
                })
        }
    }

    return (
        <div>
            <Head />
            <div className='mt40 dsf plr40'>
                <div className="mr20">
                    <h3>????????????</h3>
                    <Input placeholder='?????????????????????????????????' className='w150' 
                        onChange={enterOrderNumber}
                    />
                </div>
                <div>
                    <h3>??????????????????</h3>
                    <Space direction="vertical">
                        <DatePicker onChange={onChange} picker="month" />
                    </Space>
                </div>
            </div>
            <div>
                <div>
                    <div className='mt40 df plr40'>
                        <div>
                            <h3>?????????</h3>
                            <Input placeholder='???????????????' className='w150' 
                                onChange={enterStyleNumbe}
                            />    
                        </div>
                        <div>
                            <h3>??????:</h3>
                            <Input placeholder='???????????????' className='w150' 
                                onChange={enterColorNumber}
                            />    
                        </div>
                        <div>
                            <h3>??????:</h3>
                            <Input placeholder='???????????????' className='w150' 
                                onChange={enterFactory}
                            />    
                        </div>
                        <div>
                            <h3>?????????:</h3>
                            <Input placeholder='??????????????????' className='w150' 
                                onChange={enterStampFactory}
                            />    
                        </div>
                    </div>
                    <div className='mt40 df plr40'>
                        <div>
                            <h3>?????????:</h3>
                            <Input placeholder='??????????????????' className='w150'
                                onChange={enterEmbroiderFactory}
                            />    
                        </div>
                        <div>
                            <h3>???????????????:</h3>
                            <Select defaultValue="?????????" className='w150' 
                                onChange={handleChange}
                            >
                                <Option value="???">???</Option>
                                <Option value="???">???</Option>
                            </Select>   
                        </div>
                        <div>
                            <h3>?????????</h3>
                            <Input placeholder='???????????????' className='w150' 
                                // onChange={enterSize}
                            />    
                        </div>
                        <div>
                            <h3>?????????</h3>
                            <Input placeholder='?????????????????????' className='w150' type='number'
                                onChange={enterClaimsCount}
                            />    
                        </div>
                    </div>

                    
                    <div className='mt40 plr40'>
                        <h3>????????????</h3>
                        <TextArea
                            placeholder='?????????????????????'
                            showCount
                            maxLength={100}
                            style={{
                            height: 120,
                            }}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className='mt40 plr40 df ac pb40'>
                    <div>
                        {/* <h3>??????</h3> */}
                            {/* <Upload {...props}>
                                <Button icon={<UploadOutlined />}>????????????</Button>
                            </Upload> */}
                    </div>
                    <div className='mt40 plr40'>
                        <button 
                            onClick={submitInfo}
                        >
                            ????????????
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateData;