import React from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputFormComponent from "../../components/InputForm/InputFormComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponet";
import { Image } from "antd";
import { useState  } from "react";
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import imgInpage from "../../assect/img/sigin.webp"
import {  useNavigate } from "react-router-dom";
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import * as message from '../../components/Message/Message'
import { useEffect } from 'react'
const SignUpPage=()=>{
    const navigate = useNavigate()
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
    const [email, setEmail] = useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const mutation = useMutationHooks(
        data => UserService.signupUser(data)
      )
    const { data, isSuccess, isError } = mutation
    useEffect(() => {
        if (isSuccess) {
          message.success()
          handleNavigateSignIn()
        } else if (isError) {
          message.error()
        }
      }, [isSuccess, isError])
    const handleOnchangeEmail = (value) => {
        setEmail(value)
      }
      const handleOnchangePassword = (value) => {
        setPassword(value)
      }
      const handleOnchangeConfirmPassword = (value) => {
        setConfirmPassword(value)
      }
     
    const handleNavigateSignIn = () =>[
        navigate('/sign-in')
    ]
    const handleSignUp = () => {
        mutation.mutate({ email, password, confirmPassword })
      }
    return (
        <div style={{display:'flex' , alignItems:'center', justifyContent:'center',backgroundColor:'rgba(0,0,0,0.53)' , height:'100vh'}}>
            <div style={{width:'800px',height:'445px',borderRadius:'4px' , backgroundColor:'#fff' ,display:'flex'}}>
            <WrapperContainerLeft>
                <h1>Xin Chào </h1>
                <p>Nhập email và mật khẩu để tạo tài khoản Tech_Wrod</p>
                <InputFormComponent style={{marginBottom:'10px'}} placeholder="Nhập email abc@gmail.com" value={email} onChange={handleOnchangeEmail} />
                <div  style={{position:'relative'}}>
                    <span 
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            style={{zIndex: 10 ,position: 'absolute',
                                top:'4px',
                                right:'8px'
                
                    }}>{
                        isShowPassword?(
                            <EyeFilled/>
                        ):(
                            <EyeInvisibleFilled/>
                        )
                        }
                        </span>

                    <InputFormComponent style={{marginBottom:'10px'}} placeholder="Nhập Mật Khẩu" type={isShowPassword ? "text" : "password"} value={password} onChange={handleOnchangePassword}/>
                </div>
                <div
                    onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}  
                    style={{position:'relative'}}>
                    <span style={{zIndex: 10 ,position: 'absolute',
                                top:'4px',
                                right:'8px'
                
                    }}>{
                        isShowConfirmPassword?(
                            <EyeFilled/>
                        ):(
                            <EyeInvisibleFilled/>
                        )
                        }
                        </span>
                    <InputFormComponent placeholder="Nhập Lại Mật Khẩu" type={isShowConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={handleOnchangeConfirmPassword}/>
                </div>
                {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
                <ButtonComponent
                            disabled={!email.length || !password.length || !confirmPassword.length}
                            onClick={handleSignUp}
                            size={40}
                            styleButton={{
                                background: 'rgb(255, 57, 69)',
                                height: '48px',
                                width: '100%',
                                border: 'none',
                                borderRadius: '4px',
                                margin: '26px 0 10px'
                            }}
                            textbutton={'Đăng ký'}
                            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
            ></ButtonComponent>
                    <p>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn} style={{cursor:'pointer'}}>Đăng Nhập</WrapperTextLight></p>
            </WrapperContainerLeft>
            <WrapperContainerRight>
            <Image src={imgInpage} preview={false} alt="iamge-logo" height={'203px'} width={'203px'}/>
                        <h4 style={{color:'rgb(13,92,182)'}}>Mua sắm tại Tech_word</h4>
            </WrapperContainerRight>
        </div>
        </div>
    )
}

export default SignUpPage