import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb, getStoredCart} from '../../utilities/fakedb'
import './Shop.css'

const Shop = () => {

  //State

  const[products,setProducts]=useState([]);
  const [cart,setCart]=useState([]);
  const[displayProducts,setDisplayProducts]=useState([]);

  //Effect

  useEffect(()=>{
    
   
      fetch('./products.json')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setDisplayProducts(data)
            console.log('product recieved');   
        });
  },[])


  //


  useEffect(()=>{
    
    
    if(products.length){
        const saveCart=getStoredCart();
        const storeCart=[]
        for(const key in saveCart){
            
            const addedProduct=products.find(product=>product.key===key);
            
            storeCart.push(addedProduct);
           }
    }
  },[products])

  const handleToCart=(product)=>{
     const newCart=[...cart,product];
     setCart(newCart);

     /// save to local storage
     addToDb(product.key)

  }


  //Search  Input Box
   
  const handleSearch = event=>{
      const searchText=event.target.value;
      const matchProducts=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
      setDisplayProducts(matchProducts);
      console.log(matchProducts.length)
  }


    return (
        <div>

        <div className='search-container'>
              <input type='text' onChange={handleSearch} placeholder='Search Product'></input>
        </div>

         

            <div className='shop-container'>
            <div className="product-container">
               
            
               {
                displayProducts.map(product=><Product 
                    
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
        </div>
    );
};

export default Shop;