import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";


let Body=()=>{
    const [listRestData,setListRestData]=useState([])
    const [filterSearch,setFilterSearch]=useState([])
    const[restSearch,setRestSearch]=useState("")
   
    let fetchData= async()=>{
        let data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.693711&lng=81.0497646&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        let json=await data.json();
        setListRestData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterSearch(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }
    useEffect(()=>{
        fetchData();
        console.log("use effect")
    },[])

   
    return listRestData.length===0?(
        <Shimmer/>
    ):(
        <div>
            <div className="search">
                <div>
                    <input name="text" value={restSearch} onChange={(e)=>{setRestSearch(e.target.value)
            
                    }}></input>
                    <button className="search-button" onClick={()=>{ 
                       const searchList =listRestData.filter((rest)=>{return(rest.info.name.toLowerCase().includes(restSearch.toLowerCase()))})
                       
                       setFilterSearch(searchList)
                    }}>Search BY Restrents</button>
                </div>
            <button className='filter' onClick={()=>{filteredListRest=listRestData.filter (res=>res.info.avgRating>4)
                setListRestData(filteredListRest)
            }}>
                Top Rated Restrents
            </button>
            </div>
            <div className='card-container'>
                {filterSearch.map(cardInfo=>{
                   return(
                        <RestCard key={cardInfo.info.id} rest={cardInfo}/>
                    )
                })}
             </div>
            
        </div>
    )
}
export default Body;