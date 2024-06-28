import { useState } from "react";
import { MENU_API } from "./constants";
import { useEffect ,useState} from "react";
let useRestMenu=(resId)=>{
    const [restMenuInfo,setRestMenuInfo]=useState(null)
    let fetchRest = async()=>
        {
            let fetchData=await fetch(MENU_API+resId);
            let restMenu=await fetchData.json();
            setRestMenuInfo(restMenu.data)
        }
        useEffect(()=>{fetchRest()},[])



    return restMenuInfo
}
export default useRestMenu;