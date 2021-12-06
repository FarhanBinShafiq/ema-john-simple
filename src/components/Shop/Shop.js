import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

  //State

  const[products,setProducts]=useState([]);
  const [cart,setCart]=useState([]);

  //Effect

  useEffect(()=>{
      fetch('./products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
  },[])


  //

  const handleToCart=(product)=>{
     const newCart=[...cart,product];
     setCart(newCart);

  }

    return (
        <div className='shop-container'>
            <div className="product-container">
               
            
               {
                   products.map(product=><Product 
                    
                    key={product.key}
                    product={product}
                    handleToCart={handleToCart}
                    ></Product>)
               }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;