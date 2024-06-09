import { useEffect, useState } from "react";
import RestCard,{PromotedRestCard} from "./RestCard";
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
    let RestCardPromoted=PromotedRestCard(RestCard);
     return listRestData.length===0?(
        <Shimmer/>
    ):(
        <div>
            <div className="flex p-4 m-4">
                <div>
                    <input className="border-solid border-current bg-violet-50 hover:bg-slate-400" name="text" value={restSearch} onChange={(e)=>{setRestSearch(e.target.value)
            
                    }}></input>
                    <button className="p-3 mx-2 bg-green-200 rounded-lg" onClick={()=>{ 
                       const searchList =listRestData.filter((rest)=>{return(rest.info.name.toLowerCase().includes(restSearch.toLowerCase()))})
                       
                       setFilterSearch(searchList)
                    }}>Search BY Restrents</button>
                </div>
            <button className='px-2 mx-2 bg-blue-200 rounded-lg' onClick={()=>{filteredListRest=listRestData.filter (res=>res.info.avgRating>4)
                setFilterSearch(filteredListRest)
            }}>
                Top Rated Restrents
            </button>
            </div>
            <div className='flex flex-wrap'>
                {filterSearch.map(cardInfo=>{
                   return(
                    <Link key={cardInfo.info.id} to={"/restaurents/"+cardInfo.info.id}>
                       
                        {console.log("card info",cardInfo.info.isOpen)}
                        {cardInfo.info.isOpen?(<RestCardPromoted rest={cardInfo}/>):<RestCard rest={cardInfo}/>}
                        
                    
                    </Link>
                        
                    )
                })}
             </div>
            
        </div>
    )
}
export default Body;