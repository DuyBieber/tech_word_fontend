import React from "react";
import { WrappTextPrice, WrappTextValue, WrapperLableText, Wrappercontent } from "./style";
import { Checkbox ,Rate } from "antd";
const NavBarComponent=()=>{
    const onChange=()=>{

    }
    const renderContent=(type, options)=>{
        switch(type){
            case'text':
                return options.map((option)=>{
                    
                        return ( <WrappTextValue>{option}</WrappTextValue>)
                    
                })
            case'checkbox':
                    return( <Checkbox.Group style={{ width: '100%' , display:'flex' , flexDirection:'column' , gap:'12px' }} onChange={onChange}>
                        {options.map((option)=>{
                            return (
                                <Checkbox style={{marginLeft:0}} value={option.value}>{option.label}</Checkbox>
                            )
                        })}

                            </Checkbox.Group>
                    )
            case'star':
                    return options.map((option)=>{
                            return (
                                <div style={{display:'flex' , padding:'0 5px',gap:'5px'}}>
                                <Rate style={{fontSize:'12px'}} disabled defaultValue={option} />
                                <span>từ {option}sao</span>
                                </div>
                            )
                        })
             case'price':
                    return options.map((option)=>{
                            return (
                                
                                <WrappTextPrice>{option}</WrappTextPrice>
                                
                            )
                        })

                
            default:
                return{}
        }
    }
    return (
        <div >
            <WrapperLableText >Label</WrapperLableText>
            <Wrappercontent>
            {renderContent('text' ,['Lap Top' ,'Máy Tính Bảng' , 'Apple'])}
            </Wrappercontent>
            
        </div>
    )

}

export default NavBarComponent