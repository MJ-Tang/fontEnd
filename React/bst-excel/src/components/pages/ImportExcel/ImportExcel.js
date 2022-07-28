import React, { useState, useEffect } from 'react';
import { AudioOutlined,UploadOutlined } from '@ant-design/icons';
import { Input, Button, message, Upload } from 'antd';
import { DatePicker, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import moment from 'moment';


import axios from 'axios';
import Head from "../../ui/Header";

const ImportExcel = () => {
    const Token = localStorage.Token
    const userType = localStorage.userType
    console.log(userType,Token);

    const [month, setMonth] = useState('')

    // useEffect(() => {
    //     let data = moment().format("YYYYMM")
    //     console.log('data',data);
    //     setMonth(month)
    // },[])

    const props = {

        name: 'file',
        action: 'http://120.48.80.204:8080/api/excel/upload',
        headers: {
            authorization: 'authorization-text',
            'Token': Token
        },
        data: {
            importDate: month,
        },

        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
        
            if (info.file.status === 'done') {
                message.success(`${info.file.name} 文件上传成功`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
            },
        };


        const onChange = (date, dateString) => {
            let month = dateString
            month = month.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");
            console.log(month);
            setMonth(month)
        };

    return (
        <div>
            <Head />
            {(() => {
                if (userType != 0 ) {
                    return <h2 className="ta mt20">目前仅管理员可以上传Excel文件</h2>
                }else {
                    return (
                        <div>
                            <h2 className="ta mt20">请先选择要导入的年份</h2>
                            <div className='dfc mt20 plr40'>
                                <Space direction="vertical">
                                    <DatePicker onChange={onChange} picker="year" />
                                </Space>
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>上传文件</Button>
                                </Upload>
                                
                            </div>
                        </div>
                    )
                }
            })()}

            
        </div>
    );
}

export default ImportExcel;