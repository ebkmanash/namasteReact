import ItemList from "./ItemList";
let RestItemCategory = ({ data, show, setShowIndex,showIndex }) => {

  let expand = () => {
    setShowIndex();
  };
  return (
    <div className="  bg-green-100 shadow-lg py-4 mx-auto my-4">
      <div className="flex justify-between cursor-pointer" onClick={expand}>
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇</span>
      </div>
      {
      show && <ItemList item={data.itemCards}/>
        }
    </div>
  );
};
export default RestItemCategory;
