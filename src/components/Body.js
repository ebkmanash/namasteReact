import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";


let Body=()=>{
    const [listRestData,setListRestData]=useState([])
   
    let fetchData= async()=>{
        let data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.693711&lng=81.0497646&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        let json=await data.json();
        setListRestData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }
    useEffect(()=>{
        fetchData();
    },[])

   
    return listRestData.length===0?(
        <Shimmer/>
    ):(
        <div>
            <button className='filter' onClick={()=>{filteredListRest=listRestData.filter (res=>res.info.avgRating>4)
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