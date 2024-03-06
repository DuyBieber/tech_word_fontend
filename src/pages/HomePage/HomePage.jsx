import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapprTypeProduct ,WrapperButtonMore, WrapperProducts } from "./style";
import SilderComponent from "../../components/SilderComponent/SilderComponent";
import silder1  from '../../assect/img/silder1.webp';
import silder2  from '../../assect/img/silder2.webp';
import silder3  from '../../assect/img/silder3.webp';
import silder4  from '../../assect/img/silder4.webp';
import CarComponent from "../../components/CarComponent/CarComponent";
import { useQuery } from "@tanstack/react-query";
import * as ProductService from '../../services/ProductService'




const HomePage=()=>{
    const arr= ['Laptop' , 'Máy Tính Bảng' , 'Apple']
    
    const fetchProductAll=async() =>{
        const res = await ProductService.getAllProduct()
        return res
    }
    const { data: products } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProductAll,
        retry: 3,
        retryDelay: 1000,
      });
    console.log('products',products)
    return (
        <>
        <div style={{width:'1270px' , margin:'0 auto'}}>
            <WrapprTypeProduct>
            {arr.map((item) => {
                return(
                    <TypeProduct name={item} key={item}/>
                )
            })}
            </WrapprTypeProduct>
            <div id="container" style={{width :'100%',backgroundColor: '#efefef'  }}>
                <div id="container" style={{height:'100%',width:'1270px',margin:'0 auto'}}>
                    <SilderComponent arrImages={[silder1,silder2,silder3,silder4]}/>
                    <WrapperProducts>
                        {products?.data.map((product)=>{
                            return(
                                <CarComponent key={product._id}
                                countInStock={product.countInStock}
                                description={product.description}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                rating={product.rating}
                                type={product.type}
                                selled={product.selled}
                                discount={product.discount}
                                id={product._id}/>
                            )
                        })}
                        <CarComponent/>
                        <CarComponent/>
                        <CarComponent/>
                        <CarComponent/>
                        <CarComponent/>
                        <CarComponent/>
                        <CarComponent/>
                        <CarComponent/>
                    </WrapperProducts>
                    <div style={{width:"100%",display:"flex",justifyContent:"center", marginTop:"10px"}}>
                        <WrapperButtonMore textButton="Xem Thêm" type="outline"  styleButton={{backgroundColor:"#fff" , border:"1px solid rgb(11,16,229)",color:"rgb(11,16,229)" ,width:"240px",height:"38px",borderRadius:"4px"}}
                        styleTextButton={{fontWight:500}} />
                    </div>
                </div>
            </div>
            
            
        </div>
        </>
    )
}

export default HomePage