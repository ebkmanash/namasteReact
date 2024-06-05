import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


let Body=()=>{
    const [listRestData,setListRestData]=useState([])
    const [filterSearch,setFilterSearch]=useState([])
    const[restSearch,setRestSearch]=useState("")
   
    let fetchData= async()=>{
        let data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.430618&lng=78.3257181&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        console.log("in fetch of body")
        let json=await data.json();
        console.log("json",json)
        // const filteredcard=json?.data?.cards.filter((c)=>c?.card?.card['@type']==="type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget");
        // const filteredCrd = json?.data?.cards.filter((c)=> c?.card?.card['@type']==='type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget');
        // console.log("filtered card",filteredCrd)
        // const restaurants = filteredCrd?.card?.card?.gridElements?.infoWithStyle;
        // console.log("restaurnt",restaurants)
        // setListRestData(restaurants)
        // setFilterSearch(restaurants)
        setListRestData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterSearch(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }
    useEffect(()=>{
        fetchData();
        console.log("use effect")
    },[])

    if(useOnlineStatus()===false){
        return(
            <div>
                <h1>your internet connection is offline, please make it online</h1>
            </div>
        )
    }
    console.log('list rest data length',listRestData.length)
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
                setFilterSearch(filteredListRest)
            }}>
                Top Rated Restrents
            </button>
            </div>
            <div className='card-container'>
                {filterSearch.map(cardInfo=>{
                   return(
                    <Link key={cardInfo.info.id} to={"/restaurents/"+cardInfo.info.id}>
                        {console.log(cardInfo)}
                        <RestCard  rest={cardInfo}/>
                    </Link>
                        
                    )
                })}
             </div>
            
        </div>
    )
}
export default Body;