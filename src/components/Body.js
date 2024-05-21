import restdata from "../utils/mockData"
import { useState } from "react"
import RestCard from "./RestCard"
let  bodystyle={backgroundColor:'#f0f0f0'}
let Body=()=>{
    let [data,setData]=useState(restdata)
    return(
        <div className='body-container'>
        data:{console.log(restdata)}
            <div className='body-toprated'>
            
                <button className='top-rated-btn' onClick={()=>{filterrestdata=restdata.filter((rest)=>rest.info.avgRating>4)
                    setData(filterrestdata)
                }
            
            }>Top Rated button</button>
            </div>
            <div className='bodycard-container'>
                
                {data.map((rest)=>{
                    return(
                        <RestCard style={bodystyle} key={rest.info.id} className="rest-container" rest={rest}/>
                    )
                 })}
                
            </div>
        </div>
    )
}
export default Body;