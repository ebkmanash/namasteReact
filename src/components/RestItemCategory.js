import { CDN_CLOUD } from "../utils/constants"
import { useState } from "react";
let RestItemCategory=({data,show,setShowIndex})=>{
    console.log("at rest item category",data)
    
    let expand=()=>{
        setShowIndex();
    }
    return(
        <div className="  bg-green-100 shadow-lg py-4 mx-auto my-4">
            <div className="flex justify-between cursor-pointer" onClick={expand}><span className="font-bold">
            {data.title} ({data.itemCards.length})
            </span>
            <span>⬇</span>
            </div>
            {show && data.itemCards.map((items)=>{return(<div className="border-b-8 py-4 flex shadow-lg">
                <div><span>{items.card.info.name} </span><span>Rs-{items.card.info.price/100}</span>
            <div className="py-2 my-2" >{items.card.info.description}</div></div>
            I<img className="w-24 h-24" src={CDN_CLOUD+items.card.info.imageId}></img>
            </div>)})}
            
            
        </div>
    )
}
export default RestItemCategory;