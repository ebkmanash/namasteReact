import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react"
class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("parent constructor")
    }
    componentDidMount(){
        // console.log("parent did mount")
    }
    componentDidUpdate(){
        // console.log("parent did update")
    }
    componentWillUnmount(){
        // console.log("parent will unmount")
    }
    render(){
        // console.log("parent render")
        return(<div>
            <h1>About us page</h1>
            <UserContext.Consumer>
                {({loggedInUser})=>{
                    return(<div>{loggedInUser}</div>)
                    
                }}
            </UserContext.Consumer>
            <UserClass />
            </div>)
    }
}


export default About;