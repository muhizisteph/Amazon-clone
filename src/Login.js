import React, {useState} from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import {auth} from "./firebase";


function Login() {

    const history = useHistory ();
    const[email, setEmail]=useState("");
    const[password, setPassword] = useState("");

    const login = event =>{
        event.preventDefault(); //this help us to stop the refresh
        //login logic
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            //logged in, redirect homepage
            history.push("/");
        })
        .catch((e) => alert(e.message));
    };

    const register = event =>{
        event.preventDefault(); //this help us to stop the refresh
  
        auth
        .createUseWithEmailAndPassword(email, password)
        .then ((auth) => {
            //create a user and logged in, redirect homepage
            history.push("/");

       }   )
        .catch((e) => alert(e.message));
    };

     
    
    return (
        <div className="login">
            <Link to="./">
            <img className="login_logo"
            src="https://indianapublicmedia.org/images/news-images/amazon-logo.jpg"
            alt=""
            />
            </Link>
            <div className="login_container">
                 <h1>Sign in</h1>
                 <form>
                 <h5>E-mail</h5>
                 <input value={email} onChange={event =>setEmail(event.target.value) } type="email"/>
                 <h5>Password</h5>
                 <input value={password} onChange={event =>setPassword(event.target.value) } type="password"/>
                 <button onClick={login} className="login_signInButton">sign in</button>
                 </form>
                 <p>
                     By signing-in you agree to amazon's Conditions of Uses and Sale. Please check our
                     Privacy Notice, our Cookies Notice and internal-based Ads Notice.
                 </p>
                 <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login;
