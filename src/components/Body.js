import { useEffect, useState,useContext } from "react";
import RestCard,{PromotedRestCard} from "./RestCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


let Body=()=>{
    const [listRestData,setListRestData]=useState([])
    const [filterSearch,setFilterSearch]=useState([])
    const[restSearch,setRestSearch]=useState("")
    let {setUserName,loggedInUser}=useContext(UserContext)
   
    let fetchData= async()=>{
        let data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.430618&lng=78.3257181&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let json=await data.json()
        setListRestData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterSearch(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }
    useEffect(()=>{
        fetchData();
    },[])

    if(useOnlineStatus()===false){
        return(
            <div>
                <h1>internet Issue</h1>
                <h1>your internet connection is offline, please make it online</h1>
            </div>
        )
    }
    let RestCardPromoted=PromotedRestCard(RestCard);
     return listRestData.length===0?(
        <Shimmer/>
    ):(
        <div>
            <div className="flex p-4 m-4">
                <div>
                    <input className="border border-black p-3 mx-2 hover:bg-slate-400" name="text" value={restSearch} onChange={(e)=>{setRestSearch(e.target.value)
            
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
            <div> <label>User Name</label>
                 <input className="border border-black p-2 mx-3" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}></input>
            </div>
            </div>
            <div className='flex flex-wrap'>
                {filterSearch.map(cardInfo=>{
                   return(
                    <Link key={cardInfo.info.id} to={"/restaurents/"+cardInfo.info.id}>
                       
                        {cardInfo.info.isOpen?(<RestCardPromoted rest={cardInfo}/>):<RestCard rest={cardInfo}/>}
                        
                    
                    </Link>
                        
                    )
                })}
             </div>
            
        </div>
    )
}
export default Body;