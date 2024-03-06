import styled from "styled-components"
import ButtonComponent from "../../components/ButtonComponent/ButtonComponet"

export const WrapprTypeProduct=styled.div`
    display:flex;
    aligin-items:center;
    gap:25px;
    justify-content:flex-start;
    
    border-top:10px;
    height:30px;
`
export const WrapperButtonMore=styled(ButtonComponent)`
    &:hover {
        color:#fff;
        backgroud: rgb(13,92,182);
        span{
            color:#fff;
        }
    }
    width:100%;
    text-algin:center;
`
export const WrapperProducts= styled.div`
    display:flex;
   
    gap:14px;
    margin-top:20px;
    flex-wrap:wrap;


`