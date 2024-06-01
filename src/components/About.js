import User from "./User";
import UserClass from "./UserClass";
let About=()=>{
    return(<div>
        <h1>About us page</h1>
        <User name={"Manash"} address={"hyderabad"}/>
        <UserClass name={"Manash class"} address={"hyderabad class"}/>
    </div>)
}
export default About;