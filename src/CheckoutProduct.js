import React from "react";
import {useStateValue } from "./StateProvider";
import "./CheckoutProduct.css"

function CheckoutProduct({id, title, image, price}) {
    const [, dispatch]= useStateValue();
    const removeFromBasket = () =>{
        //remove from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id, 
        }) 
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt=""/>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                   {title} 
                </p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                  <strong> {price} </strong>
                </p>
               <p>
                <img src={image} alt="" />
            <button onClick={removeFromBasket}>Remove from basket</button>
            </p>
            </div>

            
        </div>
    )
}

export default CheckoutProduct;
