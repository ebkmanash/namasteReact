import { useContext } from "react";
import { CDN_CLOUD } from "../utils/constants";
import UserContext from "../utils/UserContext";
let stylecard={backgroundColor:"#f0f0f0"}
let RestCard=({rest})=>{
    let {name,cloudinaryImageId,cuisines,avgRating,sla}=rest.info;
    let {loggedInUser}=useContext(UserContext)
      return(
        <div className='w-[250] m-2 p-2 rounded-xl bg-slate-100 hover:border-solid'>
        <img className="p-2 rounded-xl"src={CDN_CLOUD+cloudinaryImageId} alt="food image"></img>
        <h3 className='pl-2 font-bold'>{name}</h3>
        <h4 className='p-2'> Cuisines:{cuisines.join(", ")}</h4>
        <h4 className='p-2'>Delivery Time: {sla.deliveryTime} minites </h4>
        <h5 className='p-2'>Rating:{avgRating} star</h5>
        <h5>{loggedInUser}</h5>
    </div>)
}
export let PromotedRestCard=(RestCard)=>{
    return(props)=>{
        return(<div>
            <label className="absolute bg-black text-white p-2 m-2">Promoted</label>
            <RestCard {...props} />
        </div>)
    }
} 
export default RestCard;