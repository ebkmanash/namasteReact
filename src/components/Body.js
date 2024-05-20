import { useState } from "react";
import { cardInfoRest } from "../utils/mockData";
import RestCard from "./RestCard";

let listRestData1=[{
    info:{
    "id": "596634",
    "name": "Food Engineers",
    "cloudinaryImageId": "f7qfuwixlvs0qthwxrpx",
    
    "cuisines": [
        "Biryani",
        "Chinese"
    ],
    "avgRating": 4.2,
}},{info:{
    "id": "596635",
    "name": "Unnat",
    "cloudinaryImageId": "f7qfuwixlvs0qthwxrpx",
    
    "cuisines": [
        "Biryani",
        "Chinese"
    ],
    "avgRating": 3.9,
}},{info:{
    "id": "596636",
    "name": "valintine",
    "cloudinaryImageId": "f7qfuwixlvs0qthwxrpx",
    
    "cuisines": [
        "Biryani",
        "Chinese"
    ],
    "avgRating": 4.2,
}}
]
let Body=()=>{
    const [listRestData,setListRestData]=useState(cardInfoRest)
    return(
        <div>
            <button className='filter' onClick={()=>{filteredListRest=listRestData.filter (res=>res.info.avgRating>4)
                // console.log(listRestData)
                setListRestData(filteredListRest)
            }}>
                Top Rated Restrents
            </button>
            <div className='card-container'>
                {listRestData.map(cardInfo=>{
                   return(
                        <RestCard key={cardInfo.info.id} rest={cardInfo}/>
                    )
                })}
             </div>
            
        </div>
    )
}
export default Body;