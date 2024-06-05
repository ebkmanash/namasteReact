import { useState } from "react";
import { MENU_API } from "./constants";
import { useEffect ,useState} from "react";
let useRestMenu=(resId)=>{
    const [restMenuInfo,setRestMenuInfo]=useState(null)
    let fetchRest = async()=>
        {
            let fetchData=await fetch(MENU_API+resId);
            let restMenu=await fetchData.json();
            console.log("restarent menu info",restMenu)
            setRestMenuInfo(restMenu.data)
            console.log("name of restarent is:",restMenuInfo?.cards[2]?.card?.card?.info?.name)
        }
        useEffect(()=>{fetchRest()},[])



    return restMenuInfo
}
export default useRestMenu;