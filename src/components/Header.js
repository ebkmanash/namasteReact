import { useEffect, useState } from "react";
import { Logo } from "../App";
import { Link } from "react-router-dom";
let HeaderLinks=()=>
    {
        const [btnname,setBtnname]=useState("Login");
        console.log("header body")
        useEffect(()=>{console.log("use effect called in header")},[btnname])
        return(
            <div className='p-4 m-4 justify-center '>  
                <ul className='flex '>
                <li className="p-4 m-4">
                    
                    <Link to="/">Home</Link>
                </li>
                <li className="p-4 m-4">
                    
                    <Link to="/About">about</Link>
                </li>
                <li className="p-4 m-4">
                    
                    <Link to="/Contact">contact us</Link>
                </li>
                <li className="p-4 m-4">
                    <Link to="/Grocery">Grocery</Link>
                    
                </li>
                
                <button className="header-btn" onClick={()=>btnname==="Login"?setBtnname("Logout"):setBtnname("Login")}>{btnname}</button>
            </ul>
            </div>
            
        )
    }
let Header=()=>{
    return (<div className='flex justify-between shadow-md'>
        <Logo/>
        <HeaderLinks/>
    </div>)
}
export default Header;