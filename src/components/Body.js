// import restdata from "../utils/mockData"
import { useEffect, useState } from "react"
import RestCard from "./RestCard"
let  bodystyle={backgroundColor:'#f0f0f0'}


let Body=()=>{
    const [restData,setRestData]=useState([])
    const[searchWord,setSearchWord]=useState("");
    const [filterRest,setFilterRest]=useState([])
    let fetchData=async ()=>{
        let fetchSwigy=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.42540&lng=78.50750&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        let fetchjson= await fetchSwigy.json();
        console.log(fetchjson)
        setRestData(fetchjson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilterRest(fetchjson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    useEffect(()=>{
        console.log("use effect")
        fetchData();
    },[]);
        return(
        <div className='body-container'>
            <div>
            <div className='body-toprated'>

            
                <button className='top-rated-btn' onClick={()=>{filterrestdata=restData.filter((rest)=>rest.info.avgRating>4)
                    setFilterRest(filterrestdata)
                    console.log(filterrestdata)
                }
            
            }>Top Rated button</button>
            </div>
            <div className="search-container">
            <input type="text" value={searchWord} onChange={(e)=>{setSearchWord(e.target.value)}}></input>
            <button onClick={()=>{let searchfilt=restData.filter((restrent)=>{
                return( restrent.info.name.toLowerCase().includes(searchWord.toLowerCase()))})
                setFilterRest(searchfilt)
                }}>Search by restarent</button>
            {console.log(restData)}
            </div>

            </div>
            <div className='bodycard-container'>
                
                {filterRest.map((rest)=>{
                    return(
                        <RestCard style={bodystyle} key={rest.info.id} className="rest-container" rest={rest}/>
                    )
                 })}
                
            </div>
        </div>
    )
}
export default Body;