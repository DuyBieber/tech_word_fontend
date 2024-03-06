import React, { useEffect, useState } from "react";
import { Col, Badge, Popover } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import * as UserService from "../../services/UserService";
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccout, WrapperTextHeaderSmall, WrapperConentPopup } from "./style";
import { resetUser } from "../../redux/slides/userSilde";


const HeaderComponent = ({isHiddenSearch = false , isHiddenCart=false}) => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const [userName,setUserName]=useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const handleNavigateLogin = () => {
        navigate('/sign-in');
    };
    const handleLogout=async()=>{
       
        await UserService.logoutUser()
        dispatch(resetUser())
        
    }
    
    useEffect(() => {
        
        setUserName(user?.name)
        setUserAvatar(user?.avatar)
        
      }, [user?.name, user?.avatar])
    
    const content=(
        <div>
           
            <WrapperConentPopup onClick={()=>navigate('/profile-user')}>Thông tin người dùng</WrapperConentPopup>
            {user?.isAdmin && (

                <WrapperConentPopup onClick={() => navigate('/system/admin')}>Quản lí hệ thống</WrapperConentPopup>
                
)} <WrapperConentPopup onClick={handleLogout}>Đăng xuất</WrapperConentPopup>
        </div>
    );
    console.log('user', user);

    return (
        <div style={{ width: '100%', background: 'rgb(26,148,255)', display: 'flex', justifyContent: 'center' }}>
            <WrapperHeader style={{justifyContent: isHiddenSearch && isHiddenSearch ?'space-between' : 'unset'}}>
                <Col span={5}><WrapperTextHeader>Tech_Word</WrapperTextHeader></Col>
                {!isHiddenSearch && (
                    <Col span={13}><ButtonInputSearch
                    size="large"
                    placeholder="Bạn cần tìm gì"
                    textButton="Tìm Kiếm"
                    bordered={false}
                />
                </Col>
                )}
                
                <Col span={6} style={{ display: "flex", gap: '54px', alignContent: "center" }}>
            
                    <WrapperHeaderAccout>
                    {userAvatar ? (
                <img src={userAvatar} alt="avatar" style={{
                  height: '30px',
                  width: '30px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }} />
              ) : (
                <UserOutlined style={{ fontSize: '30px' }} />
              )}
            
                        {user?.access_token?(
                            <>
                            
                            <Popover content={content} trigger="click">
                            <div style={{cursor:'pointer'}}>{userName?.length ? userName: user?.email}</div>
                            </Popover>
                            </>
                            
                        ):(
                            <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
                            <WrapperTextHeaderSmall>Đăng Nhập/Đăng Ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall >Tài Khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                        )}
                        
                    </WrapperHeaderAccout>
                            {!isHiddenCart &&(
                                 <div>
                                        <Badge count={4} size="small">
                                        <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                                    </Badge>
                                    <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
                                </div>
                            )}
                   
                        
                </Col>
            </WrapperHeader>
        </div>
    );
};

export default HeaderComponent;