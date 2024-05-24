import { useState } from "react";
import { Logo } from "../App";
let HeaderLinks=()=>
    {
        const [btnname,setBtnname]=useState("Login");
        return(
            <div className='HeadeLinkContainer'>  
                <ul className='headerlinks'>
                <li>
                    Home
                </li>
                <li>
                    about
                </li>
                <li>
                    contact us
                </li>
                <li>
                    cart
                </li>
                <li>
                    others
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