import { useState } from "react";

let User=({name,address})=>{
    const[count]=useState(0)
    const [count2]=useState(2)
    return(
        <div className="user-class">
            <h1>Count:{count}</h1>
            <h1>Count2:{count2}</h1>
            <h1>name: {name}</h1>
            <h3>Location: {address}</h3>
            <h3>mail: balakrishnamanash@gmail.com</h3>

        </div>
    )
}
export default User;