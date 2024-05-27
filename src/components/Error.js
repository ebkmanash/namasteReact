import { useRouteError } from "react-router-dom";
let Error=()=>{
    const err=useRouteError();
    console.log(err.data)
    return(<div>
        <h1>oopps...</h1>
        <h3>error in loading a page with status {err.status} with  {err.data}</h3>
    </div>)
}
export default Error;
