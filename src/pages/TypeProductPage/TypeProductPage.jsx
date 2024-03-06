import React from "react";
import NavBarComponent from "../../components/NavbarComponent/NavbarComponen";
import CarComponent from "../../components/CarComponent/CarComponent";
import { WrapperNavber, WrapperProducts } from "./style";
import { Row ,Pagination , Col } from "antd";
const TypeProductPage=()=>{
    const onChange=()=>{}
    return(
        < div style={{width:'100%' , background:"#efefef" }}>
            <div style={{width:'1270px',margin:'0 auto'}}>
                <Row style={{flexWrap:"nowrap" , paddingTop:"10px"}}>
                    <WrapperNavber span={4} >
                    <NavBarComponent/>
                    </WrapperNavber>
                    <Col span={20}>
                        <WrapperProducts>
                            <CarComponent/>
                            <CarComponent/>
                            <CarComponent/>
                            <CarComponent/>
                            <CarComponent/>
                            <CarComponent/>
                        </WrapperProducts>
                        <Pagination  defaultCurrent={2} total={100} onChange={onChange} style={{textAlign:'center' , marginTop:'10px'}}  />
                    </Col>
                    
                </Row>
            </div>
           
        </div>
    )
}
export default TypeProductPage