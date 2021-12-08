import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    //console.log('clicked')

    const {name,img,price,stock,seller}=props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        

  <div className="product">
      
      <div>
          <img src={img} alt="" />
      </div>

        <div>
            
            <h4 className='product-name'>{name}</h4>
   
            <p><small>By:{seller}</small></p>
            <p>Price:$ {price}</p>
   
            <p><small>only {stock} left in stock order soon</small></p>
             <button onClick={()=>props.handleToCart(props.product)} className='btn-regular'>{cartIcon}Add to Cart</button>
        </div>
    </div>
    );
};

export default Product;