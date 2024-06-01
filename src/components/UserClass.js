import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{name: "dummy name",
            location:"ap"},
            
        }
        console.log("child constructor");
    }
    async componentDidMount(){
        console.log("child did mount")
        let data=await fetch("https://api.github.com/users/ebkmanash")
        let json=await data.json();
        this.setState({userInfo:json});
    }
    componentDidUpdate(){
        console.log("child did update")
    }
    componentWillUnmount(){
        console.log("child will unmount")
    }
    render(){
            
        const {name,location,avatar_url}=this.state.userInfo;
        // const{count,count2}=this.state;
        console.log("child render")

        return(
        <div className="user-class">
                
                <img src={avatar_url} alt="image of person"/>
                <h1>Name:{name}</h1>
                <h3>Location:{location}</h3>
                
            </div>
        )
    }
}
export default UserClass;
