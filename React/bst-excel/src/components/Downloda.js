import React, { useState } from "react";
import axios from "axios";
import fileDownload from "js-file-download";

import { DatePicker, message, Space, Spin } from 'antd';

import Head from "./ui/Header";

axios.defaults.withCredentials=true
axios.defaults.crossDomain=true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const Download = () => {
    const Token = localStorage.Token
    console.log(Token);

    const [data, setData] = useState()
    const [month, setMonth] = useState('')
    const [download, setDownload] = useState(false)
    const [loading, setIsloading] = useState(false)

    const exportExcel = () => {
        if (month == '') {
            message.error('请选择导出月份')
        }else {
            setIsloading(true)
            axios({
                method:'GET',
                // timeout:40000,
                headers:{
                    'Content-Type': 'application/json',
                    'token': Token
                },
                url: 'http://121.196.148.127:8080/api/excel/export',
                params: {
                    importDate: month
                }
            })
                .then(res => {
                    console.log('export',res);
                    console.log(res.data.data.downloadPath);
                    setData(res.data.data.downloadPath)
                    setDownload(true)
                    setIsloading(false)
                    // fileDownload(res.data, month+'.xls')
                })
        }
    }


    // const downloadExcel = () => {
    //     setIsloading(true)
    //     axios({
    //         method:'GET',
    //         headers:{
    //             'Content-Type': 'application/json',
    //             // 'Access-Control-Allow-Origin': '*',
    //             'token': Token
    //         },
    //         url: 'http://121.196.148.127:8080/api/excel/download',
    //         params: {
    //             'downloadOrder': data
    //         },
    //         responseType: 'blob',
    //     }).then((res) => {
    //         fileDownload(data)
    //         console.log(res);
    //         // fileDownload(res.data, month+'.xls')
    //         setDownload(false)
    //         setIsloading(false)
    //     })
    // }
    const clearExcel = () => {
        axios({
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                'token': Token
            },
            url: 'http://121.196.148.127:8080/api/excel/clear',
            params: {
                'downloadId': 'downloadId'
            },
        }).then((res) => {
            fileDownload(data)
            console.log(res);
            // fileDownload(res.data, month+'.xls')
            setDownload(false)
            setIsloading(false)
        })
    }

    const open = () => {
        window.open(data)
    }
    const onChange = (date, dateString) => {
        let month = dateString
        month = month.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");
        console.log(month);
        setMonth(month)
    };

    return (
        <div>
            <Head />
            <h2 className="ta mt20">请先选择要导出的月份</h2>
            <div className="dfc mt20">
                <Space direction="vertical">
                    <DatePicker onChange={onChange} picker="month" />
                </Space>

                <button onClick={exportExcel}>导出</button>
                {download ? (
                    <div>
                        <button onClick={open}>下载</button>
                    </div>
                    // <button onClick={downloadExcel}>下载</button>
                ): (
                    <div></div>
                )}
            </div>
            {loading ? (
                <div className="example dfc mt20">
                    <Spin size="large" />
                </div>
            ) : (
                <div></div>
            )}
            <div >
                <div className="dfc mt20">
                    <h3>在下载完成后再点击</h3> 
                </div>
                <div className="dfc">
                    <button onClick={clearExcel}>清理excel缓存</button> 
                </div>
            </div>
        </div>
    );
}

export default Download;