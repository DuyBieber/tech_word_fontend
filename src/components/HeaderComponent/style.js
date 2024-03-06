import {Row} from "antd";
import styled from "styled-components"


export const WrapperHeader=  styled(Row)`
    background-color: rgb(26,148,255);
    width:1270px;
    padding: 10px 0;
    gap:16px;
    flex-wrap:nowrap;
    align-items:center
    
    `
export const WrapperTextHeader= styled.span`
    font-size:18px;
    color: #fff;
    font-weight:bold;
    text-align:left;

`
export const WrapperHeaderAccout= styled.div`
    padding:10px;
    color:#fff;
    display : flex ;
    align-items: center;
    gap:10px;
`
export const WrapperTextHeaderSmall = styled.span`
    font-size:12px;
    color:#fff;
`
export const WrapperConentPopup= styled.p`
    cursor: pointe
    &:hover{
        
        color:rgb(26,148,255);
    }


`