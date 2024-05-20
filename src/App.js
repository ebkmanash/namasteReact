import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import { LOGO_URL } from './utils/constants'
import { cardInfoRest } from './utils/mockData'

export let Logo=()=>{
    return(
        <img src={LOGO_URL} alt="food logo">

        </img>
    )
}


let stylecard={backgroundColor:"#f0f0f0"}
export default stylecard;




let NamasteFood=()=>{
    return(
        <div>
            <Header/>
        
            <Body/>
        </div>
    )
}

    let root=ReactDOM.createRoot(document.getElementById("root"))
    root.render(<NamasteFood/>);