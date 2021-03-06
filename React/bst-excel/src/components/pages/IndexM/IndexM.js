import React, { useState } from 'react';
import fileDownload from 'js-file-download';
import HeadM from "../../ui/HeaderM";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// ant
import { Input, Spin,  Select, message, Upload, Button, Space, DatePicker, Pagination } from 'antd';
import { LoadingOutlined, PlusOutlined, UploadOutlined, RetweetOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import '../../Home.css'
import { useEffect } from 'react';

const { Search } = Input;
const { Option } = Select;
const { TextArea } = Input;


const IndexM = () => {
    const Token = localStorage.Token
    console.log(Token);

    const history = useHistory();

    const [data, setData] = useState('')
    const [list, setList] = useState('')

    const [isValid, setisValid] = useState(false);
    const [isLoading, setIsloading] = useState(false)
    const [listLength, setListLenght] = useState('')
    const [image, setImage] = useState(false)
    const [ccreate, setCreate] = useState(true)

    const [tpage, setTpage] = useState(0)
    const [page, setPage] = useState(0)

    const [newId, setNewId] = useState('')
    const [listId, setListId] = useState(null)
    
    useEffect(() => {
        setCreate(true)
        setImage(false)
    },[])


    const onSearch = async () => {
        console.log('OrderNumber', data);
        if (isValid == true) {
            setIsloading(true)
            const result = await axios({
                method:'GET',
                url: 'http://121.196.148.127:8080/api/excel/page',
                headers: {
                    'Content-Type': 'application/json',
                    'Token': Token
                },
                params: {orderNumber: data}
                // params: {orderNumber: '0124668580'}
            }).then(res => {
                    console.log(res);
                    const l = res.data.data.content.length
                    console.log(res.data.data.content);
                    setList(res.data.data.content)
                    setTpage(res.data.data.totalElements)
                    setPage(res.data.data.pageable.pageNumber + 1)
                    if (res.data.data.content.length == 1) {
                        // console.log(res.data.data.content[0].id);
                        setListId(res.data.data.content[0].id)
                    }else if (res.data.data.content.length == 0) {
                        message.error('?????????????????????????????????');
                    }
                    // setData(res.data.data.content)
                    setIsloading(false);
                    setListLenght(l)

                    
                })

        } else {
            console.log('Enpty orderNumber');
        }
        
    };

    const getOrderNumber = e => {
        if (e.target.value.trim().length > 0) {
            setisValid(true)
        }
        setData(e.target.value)
        console.log(data);
    }

    const create = () => {
        history.push('/createDatam')
    }


    const GetListId = (e) => {
        const id = e.currentTarget.getAttribute('data-name')
        // console.log(e.currentTarget.getAttribute('data-name'));
        console.log(id);
        setListId(id)
        setCreate(true)
        setImage(false)
        // console.log(list.length);
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == id) {
                // console.log(list[i]);
                const newlist = [list[i]]
                console.log(newlist);
                setListLenght(newlist.length)
                setList(newlist)
            }
            
        }
        // history.push('/details?id='+id)
    }


    const handleChange = (value) => {
        console.log(`selected ${value}`);
        list[0].isUse = value
        // console.log(isUse);
    };

    const onChange = (e) => {
        // if (e.target.value.trim().length > 0) {
        //     setProblem(e.target.value)
        // }
        list[0].problem = e.target.value
    };

    const enterStyleNumbe = e => {
        list[0].styleNumbe = e.target.value
        // console.log(styleNumbe);
    }
    
    const enterColorNumber = e => {
        list[0].colorNumber = e.target.value
    }

    const enterFactory = e => {
        list[0].factory = e.target.value
    }

    const enterStampFactory = e => {
        list[0].stampFactory = e.target.value
    }

    const enterEmbroiderFactory = e => {
        list[0].embroiderFactory = e.target.value
    }

    const enterSize = e => {
        list[0].size = e.target.value
    }

    const enterClaimsCount = e => {
        list[0].claimsCount = e.target.value
    }

    const onChanged = (date, dateString) => {
        let month = dateString
        month = month.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");
        console.log(month);
        list[0].importDate = month
    };





    // const submitImage = () => {
    //     let url = 'http://121.196.148.127:8080/api/excel/upload/' + listId + '/pic'
    //     axios({
    //         method: 'POST',
    //         url: url,
    //         headers: {
    //             authorization: 'authorization-text',
    //             'Token': Token
    //         },
    //         data: {
    //             file: image
    //         }
    //     }).then(res => {
    //         console.log(res);
    //     })
    // }

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

    const submitInfo = () => {
        // console.log(orderNumber);
        list[0].id = 0
        list[0].photo = ''
        console.log(list[0].id);
        console.log(list[0].importDate.length);
        if (list[0].importDate.length == 4) {
            message.error('?????????????????????????????????')
        }else {
            axios({
                method: 'PUT',
                url: 'http://121.196.148.127:8080/api/excel/add',
                headers: {
                    'Content-Type': 'application/json',
                    'Token': Token
                },
                data: list[0]
            }).then(res => {
                console.log(res);
                if (res.data.code == 200) {
                    setCreate(false)
                    message.success('??????????????????')
                    setNewId(res.data.data)
                    setImage(true)

                }else {
                    message.error('????????????????????????????????????');
                }
            })
        }
    }

    const onChangePage = (page) => {
        const rpage = page 
        console.log(rpage);
        console.log(data);
        const fetchData = async () => { 
            const result = await axios({
                method:'GET',
                url: 'http://121.196.148.127:8080/api/excel/page',
                headers: {
                    'Content-Type': 'application/json',
                    'Token': Token
                },
                params: {
                    orderNumber: data,
                    pageNumber: rpage
                }
            }).then(res => {
                    console.log(res);
                    // setList(res.data.data.content)
                    setList(res.data.data.content)
                    setTpage(res.data.data.totalElements)
                    setPage(res.data.data.pageable.pageNumber + 1)

                })
        }
        fetchData();

    }





    return (
        <div>
            <HeadM />
            <div className='df ac'>

                <Search 
                    placeholder="???????????????" 
                    onSearch={onSearch} 
                    enterButton
                    blur 
                    className='w80 df mb20 mt20' 
                    onChange={getOrderNumber}
                />
                <div className='mr20' onClick={() => {window.location.reload()}}>
                    <Button
                        type="primary"
                        ghost
                        icon={<RetweetOutlined />}
                    />
                </div>
            </div>

            {isLoading ? (
                <div className="example dfc mt20">
                    <Spin size="large" />
                </div>
            ) : (

                (() => {
                    if (list.length == 0 ) {
                        return (
                            <div>
                                <h2 className='ta'>??????????????????????????????</h2>
                                <div className='dfc'>
                                    <button className='dfc' onClick={create}>????????????</button>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div>
                                <div className='tableTop mlr40 ta'>
                                    <div>????????????</div>      
                                </div>

                                <div>
                                    {list.map(i => (
                                        <div className='table df' key={i.id}>
                                            <div className='dsf ac'>
                                            {(() => {
                                                if (i.photo == '' ||  i.photo == null) {
                                                    return (
                                                        <div className='showImage mr40 ta'>????????????</div>
                                                    )
                                                } else {
                                                    return (
                                                        <div className='showImage mr40'>
                                                            <img src={i.photo} alt="" srcset="" className='item-img' />
                                                        </div>
                                                    )
                                                }
                                            })()}
                                            
                                            <div className=''>
                                                <div className='df'>
                                                    <div className='item '>????????????:</div>
                                                    <div className=''>{i.importDate}</div>
                                                </div>

                                                <div className='df'>
                                                    <div className='item '>??????:</div>
                                                    <div className=''>{i.custom}</div>
                                                </div>

                                                <div className='df'>
                                                    <div className='item '>??????</div>
                                                    <div className=''>{i.season}</div>
                                                </div>

                                                <div className='df'>
                                                    <div className='item '>??????:</div>
                                                    <div className=''>{i.styleNumbe}</div>
                                                </div>

                                                <div className='df'>
                                                    <div className='item '>?????????:</div>
                                                    <div className=''>{i.orderNumber}</div>
                                                </div>

                                                <div className='df'>
                                                    <div className='item '>??????:</div>
                                                    <div className=''>{i.totalCount}</div>
                                                </div>

                                                <div className='df'>
                                                    <div className='item '>??????:</div>
                                                    <div className=''>{i.embroiderFactory}</div>
                                                </div>

                                                <div className='df'>
                                                    <div className='item '>??????:</div>
                                                    <div className=''>{i.stampFactory}</div>
                                                </div>

                                                <div className='df'>
                                                    <div className='item '>?????????:</div>
                                                    <div className=''>{i.factory}</div>
                                                </div>
                                            </div>
                                            </div>
                                            
                                            
                                            {(() => {
                                                if (listLength < 2 ) {
                                                    return 
                                                } else {
                                                    return (
                                                        <div className='item edit'>
                                                            <button data-name={i.id} onClick={GetListId} className='button'>??????</button>
                                                        </div>
                                                    )
                                                }
                                            })()}
                                        </div>
                                    ))}
                                </div>
                                {(() => {
                                    if (listLength < 2 ) {
                                        return (
                                            <div>
                                                <div>
                                                <div className='mt40 plr40 df'>
                                                    <h3>?????????????????? {list[0].importDate}</h3>
                                                    <Space direction="vertical" >
                                                        <DatePicker onChange={onChanged} picker="month" className='' />
                                                    </Space>
                                                </div>
                                                <div className='mt40  plr40'>
                                                    <div>
                                                        <h3>?????????</h3>
                                                        <Input placeholder={list[0].styleNumbe} className='' 
                                                            onChange={enterStyleNumbe}
                                                            data = {list[0].styleNumbe}
                                                        />    
                                                    </div>
                                                    <div className='mt40'>
                                                        <h3>??????:</h3>
                                                        <Input placeholder={list[0].colorNumber} className='' 
                                                            onChange={enterColorNumber}
                                                        />    
                                                    </div>
                                                    <div className='mt40'>
                                                        <h3>??????:</h3>
                                                        <Input placeholder={list[0].factory} className='' 
                                                            onChange={enterFactory}
                                                        />    
                                                    </div>
                                                    <div className='mt40'>
                                                        <h3>?????????:</h3>
                                                        <Input placeholder={list[0].stampFactory} className='' 
                                                            onChange={enterStampFactory}
                                                        />    
                                                    </div>
                                                </div>
                                                <div className='mt40 plr40'>
                                                    <div>
                                                        <h3>?????????:</h3>
                                                        <Input placeholder={list[0].embroiderFactory} className=''
                                                            onChange={enterEmbroiderFactory}
                                                        />    
                                                    </div>
                                                    <div className='mt40 df'>
                                                        <h3>???????????????: {list[0].isUse}</h3>
                                                        <Select defaultValue="?????????" className='' onChange={handleChange}>
                                                            <Option value="???">???</Option>
                                                            <Option value="???">???</Option>
                                                        </Select>   
                                                    </div>
                                                    <div className='mt40'>
                                                        <h3>?????????</h3>
                                                        <Input placeholder={list[0].size} className='' 
                                                            onChange={enterSize}
                                                        />    
                                                    </div>
                                                    <div className='mt40'>
                                                        <h3>?????????</h3>
                                                        <Input placeholder={list[0].claimsCount} className='' type='number'
                                                            onChange={enterClaimsCount}
                                                        />    
                                                    </div>
                                                </div>

                                                
                                                <div className='mt40 plr40'>
                                                    <h3>????????????</h3>
                                                    <TextArea
                                                        placeholder={list[0].problem}
                                                        showCount
                                                        maxLength={100}
                                                        style={{
                                                        height: 120,
                                                        }}
                                                        onChange={onChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className='mt40 plr40 ac pb40'>
                                                {ccreate? (
                                                    <div className='mt40 plr40'>
                                                        <button onClick={submitInfo}>????????????</button>
                                                    </div>
                                                ) : (
                                                    <div></div>
                                                )}
                                                

                                                <div className='mt40'>
                                                    
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
                                                </div>
                                                
                                            </div>
                                            <div className='block'></div>
                                            </div>
                                        
                                        )
                                    } else {
                                        return (
                                            <div>
                                                <div className='ddf mt40'>
                                                    <Pagination
                                                        // current={current}
                                                        simple 
                                                        defaultCurrent={page} 
                                                        total={tpage} 
                                                        onChange={onChangePage}
                                                    />
                                                </div>
                                                <h3 className='ta mt40'>?????????????????????????????????</h3>
                                                <div className='block'></div>
                                            </div>

                                        )
                                    }
                                })()}

                                
                            </div>
                        )
                    }
                })()

                
            )}
        </div>
    );
}

export default IndexM;