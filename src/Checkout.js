import React from "react";
import {useStateValue } from "./StateProvider";
import './Checkout.css';
import Subtotal from "./Subtotal.js";
import CurrencyFormat from "react-currency-format";

function Checkout() {
    const [{basket}] = useStateValue();
    return(
        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>

            {basket?.length === 0 ?  (
               <div>
                   <h2>Your Shopping Basket is Empty!</h2>
                   <p>
                       You have no items in your basket , To buy one or more items click
                        "Add to basket" next to your item.
                   </p>
               </div>
           ) : (
               <div>
                   <h2>Your Shopping Basket</h2>
                   {basket.map((item) => (
                       <checkoutProduct
                       item={item.id}
                       Title={item.title}
                       Image={item.image}
                       Price={item.price}/>
                   ))}
               </div>
           )
        }  
        </div>   
        {basket.length > 0 && (
            <div className="checkout_right">
               <Subtotal />
            </div>
        )}         
        </div>
    )
}

export default Checkout;
