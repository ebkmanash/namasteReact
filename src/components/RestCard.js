import { CDN_CLOUD } from "../utils/constants";
let stylecard={backgroundColor:"#f0f0f0"}
let RestCard=({rest})=>{
    let {name,cloudinaryImageId,deliveryTime,cuisines,avgRating}=rest.info;
        return(<div className='rest-card' style={stylecard}>
        <img className="restimage"src={CDN_CLOUD+cloudinaryImageId} alt="food image"></img>
        <h3 className='restname'>{name}</h3>
        <h4 className='restitem'> {cuisines.join(", ")}</h4>
        <h4 className='resttime'> {deliveryTime} minites </h4>
        <h5 className='reststar'>{avgRating} star</h5>
    </div>)
}
export default RestCard;