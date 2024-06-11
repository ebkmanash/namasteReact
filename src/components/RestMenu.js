// import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestMenu from "../utils/UseRestMenu";
import RestItemCategory from "./RestItemCategory";

let RestMenu=()=>{
    // let [restMenuInfo,setRestMenuInfo]=useState(null);
    let {resId}=useParams();
    let restMenuInfo=useRestMenu(resId);
    console.log("res id",resId)
    // let fetchRest = async()=>
    // {
    //     let fetchData=await fetch(MENU_API+resId);
    //     let restMenu=await fetchData.json();
    //     console.log("restarent menu info",restMenu)
    //     setRestMenuInfo(restMenu.data)
    //     console.log("name of restarent is:",restMenuInfo?.cards[2]?.card?.card?.info?.name)
    // }
    // useEffect(()=>{fetchRest()},[])
    if (restMenuInfo===null)
        return <Shimmer/>
    console.log("rest menu body")
    let {name,cuisines,avgRating,costForTwoMessage}=restMenuInfo?.cards[2]?.card?.card?.info;
    // console.log(restMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
    let {itemCards}=restMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // let {itemCards}=restMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find((c)=> c.card.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")?.card?.card;
    console.log("menu item",restMenuInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
    let category=restMenuInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log("category",category)
    return(
    <div className="w-6/12  shadow-lg p4 mx-auto my-4  ">
        <div>
        <h1 className="p-2 m-2 font-bold flex justify-center">Name of restarent:{name}</h1>
        <h3 className="p-2 m-2 flex justify-center">{cuisines.join(",")}</h3>
        <h3 className="p-2 m-2 flex justify-center">Rating:{avgRating}*</h3>
        <h3 className="p-2 m-2 flex justify-center shadow-lg">Cost For Two:{costForTwoMessage}</h3>
        </div>
        
        {category.map(eachCategory=>{return(<RestItemCategory  data={eachCategory?.card?.card}/>)})}



        {/* <ul>
        {itemCards.map(item=>{return(
            <li className="p-2 m-2" key={item.card.info.id}>{item.card.info.name}-Rs{item.card.info.price/100||item.card.info.defaultPrice/100}</li>
        )})}</ul> */}
                  
    </div>
    )
}
export default RestMenu;