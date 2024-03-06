import React from "react";
import {Row ,Col , Image } from "antd";
import imageProduct from "../../assect/img/product1.webp";
import imageProductSmall from "../../assect/img/productmall1.webp";
import ButtonComponent from "../ButtonComponent/ButtonComponet";
import { WrapperImageSmall ,
     WrapperPriceProduct, 
     WrapperStyleColImage , 
     WrapperStyleNameProduct ,
     WrapperStyleTextPSell ,
     WrapperPriceTextProduct ,
     WrapperAddressProduct ,
     WrapperQualityProduct
    ,WrapperInputNumber
} from "./style";

import {StarFilled ,PlusOutlined ,MinusOutlined  } from '@ant-design/icons';

const ProductDetailsComponent =()=>{
    const onChange =()=>{}
    return(
        <Row style={{padding : '16px' ,background:'#fff' , borderRadius:'4px'}}>
            <Col span={10} style={{borderRight:'1px solid #e5e5e5' ,paddingRight:'8px'}}>
                <Image src={imageProduct} alt="image product" preview="false"/>
                <Row style={{paddingTop:'10px' , justifyContent:'space-between'}}>
                    <WrapperStyleColImage span={4}>
                    <WrapperImageSmall src={imageProductSmall} alt="image productmalls" previdew="false" style={{width:'100px ',height:'100px'}}></WrapperImageSmall>
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                    <WrapperImageSmall src={imageProductSmall} alt="image productmalls" previdew="false" style={{width:'100px ',height:'100px'}}></WrapperImageSmall>
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                    <WrapperImageSmall src={imageProductSmall} alt="image productmalls" previdew="false" style={{width:'100px ',height:'100px'}}></WrapperImageSmall>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                    <WrapperImageSmall src={imageProductSmall} alt="image productmalls" previdew="false" style={{width:'100px ',height:'100px'}}></WrapperImageSmall>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                    <WrapperImageSmall src={imageProductSmall} alt="image productmalls" previdew="false" style={{width:'100px ',height:'100px'}}></WrapperImageSmall>
                    </WrapperStyleColImage>
                    
                    
                
                </Row>
            </Col>
            <Col span={14} style={{paddingLeft:'10px'}}>
                <WrapperStyleNameProduct>
                Laptop ASUS VivoBook Go 14 E1404FA-NK177W (R5-7520U | 16GB | 512GB | AMD Radeon Graphics | 14′ FHD | Win 11)
                </WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{fontSize:'12px',color:'rgb(253,216,54)'}}/>
                    <StarFilled style={{fontSize:'12px',color:'rgb(253,216,54)'}}/>
                    <StarFilled style={{fontSize:'12px',color:'rgb(253,216,54)'}}/>
                    <StarFilled style={{fontSize:'12px',color:'rgb(253,216,54)'}}/>
                    <StarFilled style={{fontSize:'12px',color:'rgb(253,216,54)'}}/>
                    <WrapperStyleTextPSell>| Đã bán 100+</WrapperStyleTextPSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>13.490.000 ₫</WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>Giao den </span>
                    <span className="address">Ninh kieu , Can Tho</span>
                    <span className="change-address">Doi dia chi</span>
                </WrapperAddressProduct>
                <div style={{margin:'10px 0 20px' ,padding:'10px 0' ,borderTop:'1px solid #e5e5e5',borderBottom:'1px solid #ccc'}}>
                    <div style={{marginBottom: '10px'}}> So luong</div>
                    <WrapperQualityProduct>
                            <button style={{border:'none' ,background:'transparent'}}>
                            <MinusOutlined  style={{color:'#000' , fontSize:'20px'}} />
                            </button>
                        
                            <WrapperInputNumber  defaultValue={3} onChange={onChange} size="small" />
                        
                            <button style={{border:'none' ,background:'transparent'}}>
                            <PlusOutlined  style={{color:'#000' , fontSize:'20px'}} />
                            </button>
                    </WrapperQualityProduct>
                    </div>
                    <div style={{display:'flex' , alignItems:'center', gap:'12px'}}>
                    <ButtonComponent
                        bordered={false}
                        size={40} 
                        styleButton={{background:'rgb(255,57,69)'
                                    ,height:'48px' ,
                                        width:'220px'
                        }} 
                        textButton={'Chọn Mua'}
                        styleTextButton={{color:'#fff' , fontSize:'15px' , fontWeight:'700'}}
                        >
                    </ButtonComponent>
                    <ButtonComponent
                        bordered={false}
                        size={40} 
                        styleButton={{background:'#fff'
                                    ,height:'48px' ,
                                        width:'220px',
                                        border:'1px solid rgb(13,92,182)'
                        }} 
                        textButton={'Mua Trả Sau'}
                        styleTextButton={{color:'rgb(13,92,182' , fontSize:'15px'}}
                        >
                    </ButtonComponent>
                </div>
                
                
            </Col>
        </Row>
    )
}

export default ProductDetailsComponent