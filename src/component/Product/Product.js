import React from 'react';
import './Product.css';
import { FaCartPlus } from "@react-icons/all-files/fa/FaCartPlus";
const Product = (props) => {
    const {handleCartItems}=props
 const{name,img,price,ratings,seller,shipping}=props.product;
    return (
       <div className="product my-5 ms-3">
         <div>
            <div className="m-2"><img className="img" src={img} alt="" srcSet=""/></div>
            <h6 className="ms-2">{name}</h6>
            <div className="d-flex flex-lg-column ms-2">
            <h6>Price:$ {price}</h6>
            <span className="mt-4"> <small>Manufacturer: {seller}</small> </span>
            <span className="mb-2">{ratings} star</span>
            </div>
             <button onClick={()=>handleCartItems(props.product)}   className="btn">Add to Cart <FaCartPlus></FaCartPlus></button>
        </div>
       </div>
    );
};

export default Product;