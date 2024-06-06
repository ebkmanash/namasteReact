import { useEffect, useState } from "react";
import { Logo } from "../App";
import { Link } from "react-router-dom";
let HeaderLinks=()=>
    {
        const [btnname,setBtnname]=useState("Login");
        console.log("header body")
        useEffect(()=>{console.log("use effect called in header")},[btnname])
        return(
            <div className='HeadeLinkContainer'>  
                <ul className='headerlinks'>
                <li>
                    
                    <Link to="/">Home</Link>
                </li>
                <li>
                    
                    <Link to="/About">about</Link>
                </li>
                <li>
                    
                    <Link to="/Contact">contact us</Link>
                </li>
                <li>
                    <Link to="/Grocery">Grocery</Link>
                    
                </li>
                
                <button className="header-btn" onClick={()=>btnname==="Login"?setBtnname("Logout"):setBtnname("Login")}>{btnname}</button>
            </ul>
            </div>
            
        )
    }
let Header=()=>{
    return (<div className='header'>
        <Logo/>
        <HeaderLinks/>
    </div>)
}
export default Header;