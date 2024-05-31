import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import { LOGO_URL } from './utils/constants'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import RestMenu from './components/RestMenu'
export let Logo=()=>{
    return(
        <img src={LOGO_URL} alt="food logo">

        </img>
    )
}
let NamasteFood=()=>{
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
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
            }
        ]
        ,errorElement:<Error/>,
    },
    
])


    let root=ReactDOM.createRoot(document.getElementById("root"))
    root.render(<RouterProvider router={reactRouter}/>);