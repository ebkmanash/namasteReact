import { Logo } from "../App";
let HeaderLinks=()=>
    {
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