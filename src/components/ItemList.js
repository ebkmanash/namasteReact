import { CDN_CLOUD } from "../utils/constants";
let ItemList=({item})=>{ 
 return(<div> 
    {item.map((items) => {
          return (
            <div className="border-b-8 py-4 flex shadow-lg space-between">
              <div>
                <span>{items.card.info.name} </span>
                <span>Rs-{items.card.info.price / 100}</span>
                <div className="py-2 my-2">{items.card.info.description}</div>
                <div className="w-3/12">
                    <div className="absolute">
                        <button className="p-2 mx-16 bg-black text-white">
                            Add+
                        </button>
                    </div>
                </div>
                
              </div>
              I
              <img
                className="w-24 h-24"
                src={CDN_CLOUD + items.card.info.imageId}
              ></img>

            </div>
          );
        })}


 </div>)   
}
export default ItemList;