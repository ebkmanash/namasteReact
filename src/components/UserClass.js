import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={count:0,
            count2:2,
        }
        console.log("child constructor");
    }
    componentDidMount(){
        console.log("child did mount")
    }
    
    render(){
        console.log("child render")
        const {name,address}=this.props;
        const{count,count2}=this.state;

        return(
        <div className="user-class">
                <h1>Count:{count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1,
                    count2:this.state.count2+1,
                })}}>Increase by 1</button>
                <h1>count2:{count2}</h1>
                <h1>Name:{name}</h1>
                <h3>Location:{address}</h3>
            </div>
        )
    }
}
export default UserClass;
