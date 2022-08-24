import React,{useState,useEffect} from 'react';
import './Shop.css';
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>{
            const newArray=[...data];
            setData(newArray);
        })
    },[]);

    const handleCartItems=()=>{
        console.log(data);
    }

    return (
        <div className="shop">
            <div className="shop-container">
                {
                    data.map(product=> <Product
                        handleCartItems={handleCartItems}
                         key={product.id}
                         product={product} >
                         </Product>
                    )
                }
            </div>
            <div className="shop-order">
                <h3 className="text-center mt-3">Order Summary</h3>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;