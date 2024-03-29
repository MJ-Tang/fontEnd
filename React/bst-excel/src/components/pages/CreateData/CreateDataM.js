import React,{useState} from "react";

import HeadM from "../../ui/HeaderM";
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

const CreateDataM = () => {
    const Token = localStorage.Token
    const [ccreate, setCreate] = useState(true)
    const [image, setImage] = useState(false)
    const [newId, setNewId] = useState('')

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
            message.error('请输入订单号与选择月份')
        }else {
            axios({
                method:'PUT',
                // timeout:40000,
                headers:{
                    'Content-Type': 'application/json',
                    'token': Token
                },
                url: 'http://120.48.80.204:8080/api/excel/add',
                data: list
            })
                .then(res => {
                    console.log('export',res.data.code);
                    if (res.data.code == 200) {
                        setCreate(false)
                        message.success('信息创建成功')
                        setNewId(res.data.data)
                        setImage(true)
                    }
                })
        }
    }   
    const props = {
        name: 'file',
        action: 'http://120.48.80.204:8080/api/excel/upload/' + newId + '/pic',
        headers: {
            authorization: 'authorization-text',
            'Token': Token
        },

        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
        
            if (info.file.status === 'done') {
                message.success(`${info.file.name} 文件上传成功`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} 文件上传失败.`);
            }
        },
    };

    return (
        <div>
            <HeadM />
            <div className='mt40 plr40'>
                <div className="mr20">
                    <h3>订单号：</h3>
                    <Input placeholder='请输入需要创建的订单号' className='' 
                        onChange={enterOrderNumber}
                    />
                </div>
                <div className="mt40 df">
                    <h3>请选择月份：</h3>
                    <Space direction="vertical">
                        <DatePicker onChange={onChange} picker="month" />
                    </Space>
                </div>
            </div>
            <div>
                <div>
                    <div className='mt40 plr40'>
                        <div>
                            <h3>款号：</h3>
                            <Input placeholder='请输入款号' className='' 
                                onChange={enterStyleNumbe}
                            />    
                        </div>
                        <div className="mt40">
                            <h3>色号:</h3>
                            <Input placeholder='请输入色号' className='' 
                                onChange={enterColorNumber}
                            />    
                        </div>
                        <div className="mt40">
                            <h3>工厂:</h3>
                            <Input placeholder='请输入工厂' className='' 
                                onChange={enterFactory}
                            />    
                        </div>
                        <div className="mt40">
                            <h3>印花厂:</h3>
                            <Input placeholder='请输入印花厂' className='' 
                                onChange={enterStampFactory}
                            />    
                        </div>
                    </div>
                    <div className='mt40 plr40'>
                        <div>
                            <h3>绣花厂:</h3>
                            <Input placeholder='请输入绣衣厂' className=''
                                onChange={enterEmbroiderFactory}
                            />    
                        </div>
                        <div className="mt40 df">
                            <h3>是否有吊牌:</h3>
                            <Select defaultValue="请选择" className='' 
                                onChange={handleChange}
                            >
                                <Option value="是">是</Option>
                                <Option value="否">否</Option>
                            </Select>   
                        </div>
                        <div className="mt40">
                            <h3>尺码：</h3>
                            <Input placeholder='请输入尺码' className='' 
                                // onChange={enterSize}
                            />    
                        </div>
                        <div className="mt40">
                            <h3>件数：</h3>
                            <Input placeholder='请输入索赔件数' className='' type='number'
                                onChange={enterClaimsCount}
                            />    
                        </div>
                    </div>

                    
                    <div className='mt40 plr40'>
                        <h3>瑕疵说明</h3>
                        <TextArea
                            placeholder='请输入瑕疵说明'
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
                {(() => {
                    if (image == true) {
                        return (
                            <div>
                                <h3>图片上传 {image} {newId}</h3>
                                {/* <input type="file" onChange={imageSelected} accept="image/gif,image/jpeg,image/jpg,image/png" multiple/>
                                <button onClick={submitImage}>上传图片</button> */}
                                <Upload {...props} 
                                    accept="image/*" capture="camera"
                                >
                                    <Button icon={<UploadOutlined />}>上传图片</Button>
                                </Upload>

                            </div>
                        )   
                    }else {
                        return(
                            <div></div>
                        )
                    }
                })()}
                    <div className='mt40 '>
                    {ccreate? (
                        <div className='mt40 plr40'>
                            <button onClick={submitInfo}>创建信息</button>
                        </div>
                    ) : (
                        <div></div>
                    )}
                    </div>
                </div>
                <div className="block"></div>
            </div>
        </div>
    );
}

export default CreateDataM;