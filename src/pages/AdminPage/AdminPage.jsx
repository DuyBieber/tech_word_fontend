import { Menu } from "antd";
import React, { useState } from "react";
import { getItem } from "../../utils";
import {UserOutlined ,ShoppingOutlined }from '@ant-design/icons'
import HeaderComponent from "../../components/HeaderComponent/HeadComponent";
import AdminUser from "../../components/AdminUser/AdminUser";
import AdminProduct from "../../components/AdminProduct/AdminProduct";
const AdminPage =()=>{
    const items = [
        getItem('Người Dùng', 'user', <UserOutlined />, ),
        getItem('Sản Phẩm', 'product', <ShoppingOutlined />, )
        
      ];
    
const [keySelected,setKeySelected]=useState('')
const renderPage = (key)=>{
    switch(key){
        case 'user':
            return (
                <AdminUser/>
            )
        case 'product':
            return (
                <AdminProduct/>
            )
        default:
            return <></>
    }
}
const handleOnClick =({item,key,keyPath,domEvent})=>{
    
    setKeySelected(key)
  }

    return (
        <>
        <HeaderComponent isHiddenSearch isHiddenCart/>
            <div style={{display:'flex'}}>
                <Menu
                mode="inline"
                
                style={{
                boxShadow: '1px 1px 2px #ccc',
                height:'100vh',
                width: '256px',
                }}
                items={items}
                onClick={handleOnClick}
            />
                <div style={{flex:'1' , padding: '15px'}}>
                    {renderPage(keySelected)}
                </div>
            </div>
      </>
    )
}

export default AdminPage