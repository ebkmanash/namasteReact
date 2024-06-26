import React,{lazy,Suspense, useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import { LOGO_URL } from './utils/constants'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import RestMenu from './components/RestMenu'
import UserContext from './utils/UserContext'
// import Grocery from './components/Grocery'
const Grocery = lazy(() => import('./components/Grocery'));
export let Logo=()=>{
    return(
        <img className="w-56"src={LOGO_URL} alt="food logo">

        </img>
    )
}
let NamasteFood=()=>{
    let [userName,setUserName]=useState();
    useEffect(()=>{
        let data={loggedInUser:"Bala"};
        setUserName(data.loggedInUser)
    },[])
    return(
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div >
        
            <Header/>
            
            <Outlet/>
        </div>
        </UserContext.Provider>
        
    )
}
let reactRouter=createBrowserRouter([
    {
        path:"/",
        element:<NamasteFood/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            { 
                path:"/About",
                element:<About/>
            },
            { 
                path:"/Contact",
                element:<Contact/>
            },
            { 
                path:"/restaurents/:resId",
                element:<RestMenu/>
            },
            {
                path:"/Grocery",
                element:<Suspense fallback={<h1>loading</h1>}>
                             <Grocery/>
                        </Suspense>
            },
            
        ]
        ,errorElement:<Error/>,
    },
    
])


    let root=ReactDOM.createRoot(document.getElementById("root"))
    root.render(<RouterProvider router={reactRouter}/>);