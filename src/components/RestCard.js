import { CDN_CLOUD } from "../utils/constants";
let stylecard={backgroundColor:"#f0f0f0"}
let RestCard=({rest})=>{
    let {name,cloudinaryImageId,cuisines,avgRating,sla}=rest.info;
    // let {deliveryTime}=rest.info.sla;
        
        return(<div className='rest-card' style={stylecard}>
        <img className="restimage"src={CDN_CLOUD+cloudinaryImageId} alt="food image"></img>
        <h3 className='restname'>Name:{name}</h3>
        <h4 className='restitem'> Cuisines:{cuisines.join(", ")}</h4>
        <h4 className='resttime'>Delivery Time: {sla.deliveryTime} minites </h4>
        <h5 className='reststar'>Rating:{avgRating} star</h5>
    </div>)
}
export default RestCard;