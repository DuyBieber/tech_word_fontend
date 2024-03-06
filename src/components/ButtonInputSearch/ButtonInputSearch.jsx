
import React from "react";
import {
    SearchOutlined
    
  } from '@ant-design/icons';
import InputComponent from "../../HeaderLeft/InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponet";

const ButtonInputSearch=(props)=>{
    const {size , placeholder , textButton ,
         bordered ,backgroundColorInput="#fff" , 
         backgroundColorButton = "rgb(13,92,182)",
        ColorButton="#fff"
        }=props
    return (
        <div style={{display:'flex'}}>
            <InputComponent
               size={size} 
               placeholder={placeholder} 
               bordered={bordered} 
               style={{background:backgroundColorInput , borderRadius:'0px'}}/>
            <ButtonComponent 
                size={size} 
                style={{background:backgroundColorButton, borderRadius:'0px' }} 
                icon={<SearchOutlined color={ColorButton} style={{color:"#fff"}}/>}
                textButton={textButton}
                styleTextButton={{color:ColorButton}}
                />
             
        </div>

    )
}

export default ButtonInputSearch