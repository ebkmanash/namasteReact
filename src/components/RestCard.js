import { IMG_URL } from "../utils/constant";
let RestCard=(props)=>{
    let {name,cuisines,cloudinaryImageId,avgRating}=props.rest.info;
    let {deliveryTime}=props.rest.info.sla;
    return(
        <div className='rest-card'>
            <img src={IMG_URL+cloudinaryImageId} alt="restarent image" className='rest-image'></img>

        <h4 className='rest-name'>Name:{name}</h4>
        <h4 className='rest-cuisines'>Cuisines:{cuisines.join(", ")}</h4>
        <h4 className='rest-avgrating'>Average rating:{avgRating}</h4>
        <h4 className='rest-deliverytime'>deliveryTime:{deliveryTime}</h4>
        </div>
    )
}
export default RestCard;