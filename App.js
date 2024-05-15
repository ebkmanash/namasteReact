import React from 'react'
import ReactDOM from 'react-dom/client'

// let heading=React.createElement("h1",{},"vinayakaya namaha3")

    

let FunctComp=()=>{

    return(
        
        <div>
            <div>first</div>
                    Hello
            </div>
    )
}
let Title=<h2>namaste react
    <FunctComp/>
    {FunctComp()}
</h2>
       
let JsxHeading=<h1 > i am jsx element</h1>
    let root=ReactDOM.createRoot(document.getElementById("root"))
    root.render(Title);