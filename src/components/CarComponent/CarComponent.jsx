import React from "react";

import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReporText,WrapperStyleTextSell } from "./style";
import {StarOutlined }from '@ant-design/icons'
const CarComponent=(props)=>{
    const { countInStock, description, image, name, price, rating, type, discount, selled, id } = props
    
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{width:'200px' , height:'200px'}}
            style={{ width: 200 }}
            bodyStyle={{padding :'10px'}}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <StyleNameProduct>Iphone</StyleNameProduct>
            <WrapperPriceText>
                <span style={{marginRight: '4px'}}>
                  <span>4.6</span> <StarOutlined style={{fontSize:'12px' , color:'yellow'}} />
                  </span>
                <WrapperStyleTextSell>| Đã bán 1000+</WrapperStyleTextSell>

            </WrapperPriceText>
            <WrapperPriceText>
                <span style={{marginRight:'8px'}}>1600000Đ</span>
                <WrapperDiscountText>
                    -5%
                </WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle> 

    )
}

export default CarComponent