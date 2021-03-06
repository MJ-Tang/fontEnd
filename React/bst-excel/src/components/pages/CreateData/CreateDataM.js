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
                    console.log('export',res.data.code);
                    if (res.data.code == 200) {
                        setCreate(false)
                        message.success('??????????????????')
                        setNewId(res.data.data)
                        setImage(true)
                    }
                })
        }
    }   
    const props = {
        name: 'file',
        action: 'http://121.196.148.127:8080/api/excel/upload/' + newId + '/pic',
        headers: {
            authorization: 'authorization-text',
            'Token': Token
        },

        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
        
            if (info.file.status === 'done') {
                message.success(`${info.file.name} ??????????????????`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} ??????????????????.`);
            }
        },
    };

    return (
        <div>
            <HeadM />
            <div className='mt40 plr40'>
                <div className="mr20">
                    <h3>????????????</h3>
                    <Input placeholder='?????????????????????????????????' className='' 
                        onChange={enterOrderNumber}
                    />
                </div>
                <div className="mt40 df">
                    <h3>??????????????????</h3>
                    <Space direction="vertical">
                        <DatePicker onChange={onChange} picker="month" />
                    </Space>
                </div>
            </div>
            <div>
                <div>
                    <div className='mt40 plr40'>
                        <div>
                            <h3>?????????</h3>
                            <Input placeholder='???????????????' className='' 
                                onChange={enterStyleNumbe}
                            />    
                        </div>
                        <div className="mt40">
                            <h3>??????:</h3>
                            <Input placeholder='???????????????' className='' 
                                onChange={enterColorNumber}
                            />    
                        </div>
                        <div className="mt40">
                            <h3>??????:</h3>
                            <Input placeholder='???????????????' className='' 
                                onChange={enterFactory}
                            />    
                        </div>
                        <div className="mt40">
                            <h3>?????????:</h3>
                            <Input placeholder='??????????????????' className='' 
                                onChange={enterStampFactory}
                            />    
                        </div>
                    </div>
                    <div className='mt40 plr40'>
                        <div>
                            <h3>?????????:</h3>
                            <Input placeholder='??????????????????' className=''
                                onChange={enterEmbroiderFactory}
                            />    
                        </div>
                        <div className="mt40 df">
                            <h3>???????????????:</h3>
                            <Select defaultValue="?????????" className='' 
                                onChange={handleChange}
                            >
                                <Option value="???">???</Option>
                                <Option value="???">???</Option>
                            </Select>   
                        </div>
                        <div className="mt40">
                            <h3>?????????</h3>
                            <Input placeholder='???????????????' className='' 
                                // onChange={enterSize}
                            />    
                        </div>
                        <div className="mt40">
                            <h3>?????????</h3>
                            <Input placeholder='?????????????????????' className='' type='number'
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
                {(() => {
                    if (image == true) {
                        return (
                            <div>
                                <h3>???????????? {image} {newId}</h3>
                                {/* <input type="file" onChange={imageSelected} accept="image/gif,image/jpeg,image/jpg,image/png" multiple/>
                                <button onClick={submitImage}>????????????</button> */}
                                <Upload {...props} 
                                    accept="image/*" capture="camera"
                                >
                                    <Button icon={<UploadOutlined />}>????????????</Button>
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
                            <button onClick={submitInfo}>????????????</button>
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