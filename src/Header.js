import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
   const[{basket, user}]= useStateValue();
   
   const login = () => {
      if (user) {
auth.signOut();
      }
   }
    return (

     <nav className="header">     
      
      <Link to="/">
            <img
             className="header_logo " src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""
             />
     </Link>
 
            
            <div className="header_search">
            <input type="text" className="header_searchInput"/>
            <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="headerNav">

                <Link to={!user && "/login"} className="header_link">
                <div onClick={login} className="header_option">
                <span className="header_option1">Hello{user?.email}</span>
                <span className="header_option2">{user? 'Sign Out' : 'sign in'}</span> 
                </div>               
                </Link>
                 
                 <Link className="header_link">
                <div className="header_option">
                <span className="header_option1">Returns</span>
                <span className="header_option2">& Orders</span> 
                </div>               
                </Link>
                  
                  <Link className="header_link">
                <div className="header_option">
                <span className="header_option1">Your</span>
                <span className="header_option2">Prime</span> 
                </div>               
                </Link>
                   
                   <Link to="/checkout">
                       <div className="header_optionBasket">
                          <ShoppingBasketIcon />                          
                          <span className="header_option2 header_basketCount">{basket?.length}</span>  
                       </div>
                      
                    </Link>

            </div>                  
      </nav>          
           
           );
}
export default Header;
