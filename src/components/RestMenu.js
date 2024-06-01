import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

let RestMenu=()=>{
    let [restMenuInfo,setRestMenuInfo]=useState(null);
    let {resId}=useParams();
    console.log(resId)
    let fetchRest = async()=>
    {
        let fetchData=await fetch(MENU_API+resId);
        let restMenu=await fetchData.json();
        console.log("restarent menu info",restMenu)
        setRestMenuInfo(restMenu.data)
        console.log("name of restarent is:",restMenuInfo?.cards[2]?.card?.card?.info?.id)
    }
    useEffect(()=>{fetchRest()},[])
    if (restMenuInfo===null)
        return <Shimmer/>
    console.log("rest menu body")
    let {name,cuisines,avgRating,costForTwoMessage}=restMenuInfo?.cards[2]?.card?.card?.info;
    console.log(restMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
    // let {itemCards}=restMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    let {itemCards}=restMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find((c)=> c.card.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")?.card?.card;
    console.log("menu item",itemCards)
    return(
    <div>
        <h1>Name of restarent:{name}</h1>
        <h3>{cuisines.join(",")}</h3>
        <h3>{avgRating}</h3>
        <h3>{costForTwoMessage}</h3>
        <h3>menu items</h3><ul>
        {itemCards.map(item=>{return(
            <li key={item.card.info.id}>{item.card.info.name}-Rs{item.card.info.price/100||item.card.info.defaultPrice/100}</li>
        )})}</ul>
                  
    </div>
    )
}
export default RestMenu;