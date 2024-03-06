import React from "react";
import HeaderComponent from "../HeaderComponent/HeadComponent";

const DefaultComponent = ({children})=>{
    return (
        <div>
        <HeaderComponent/>
        {children}
        </div>
    )
}

export default DefaultComponent