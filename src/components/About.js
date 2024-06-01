import UserClass from "./UserClass";
import React from "react"
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor")
    }
    componentDidMount(){
        console.log("parent did mount")
    }
    render(){
        console.log("parent render")
        return(<div>
            <h1>About us page</h1>
            
            <UserClass name={"Manash class"} address={"hyderabad class"}/>
        </div>)
    }
}


export default About;