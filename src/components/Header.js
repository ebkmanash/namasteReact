import { useContext, useEffect, useState } from "react";
import { Logo } from "../App";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
let HeaderLinks=()=>
    {
        const [btnname,setBtnname]=useState("Login");
        useEffect(()=>{console.log("use effect called in header")},[btnname])
        let {loggedInUser}=useContext(UserContext)
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
                
                <button className="header-btn" onClick={()=>btnname==="Login"?setBtnname("Logout:"):setBtnname("Login:")}>{btnname}</button>
                <li className="p-4 m-4 font-bold">
                    {loggedInUser}
                    
                </li>
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