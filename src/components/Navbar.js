import { useState } from "react";

let Navbar=()=>{
    const [login,setLogin]=useState("login")
    return(
    <div className='nav-container'>
        <ul className='nav-list'>
            <li>
                Home
            </li>
            <li>About</li>
            <li> Contact</li>
            <li>Others</li>
            <button className="nav-login" onClick={()=>{login==="login"?(setLogin("logout")):(setLogin("login"))}}>{login}</button>
        </ul>
    </div>)
}
export default Navbar;