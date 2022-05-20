import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header"; 
import Home from "./Home";
import Checkout from "./Checkout";
import Login from './Login';
import {useStateValue } from "./StateProvider";
import {auth} from "./firebase";

function App() {
  const [,dispatch] = useStateValue();
  //piece of code wich run based on a given condition 
  // useEffct <<<<<<<<< realy necessary

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser){
        //the user is logged in

        dispatch({
          type:"SET_USER",
          user: authUser,
        });

      } else {
        // the user is out
        dispatch({
          type:"SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //the cleanup operations here
      unsubscribe();
    };
  
  }, );
  

  return (
    <Router>
       <div className="app">
      <Switch>
         <Route path="/checkout">
         <Header />
         <Checkout />
         </Route>
         <Route path="/login">
          <Login />
         </Route>         

         {/*the home page*/}
         
         <Route path="/">
           <Header />
           <Home />          
         </Route>

      </Switch>
    </div>
    </Router>
   
  );
}

export default App;
