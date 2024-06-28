import { createContext } from "react";

let UserContext=createContext(
    {
        loggedInUser:"default user"
    })
export default UserContext;

