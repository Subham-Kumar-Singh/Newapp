// import { Sports_render,Entertainment_render } from "./Items_render";
import React from "react"

const Sports=(()=>{
    return <div className="items mar1"><button className="items-btn"><h2>Sports</h2></button></div>
})

const Entertainment=(()=>{
    return <div className="items mar2"><button className="items-btn"><h2>Entertainment</h2></button></div>
})

const Defence=(()=>{
    return <div className="items mar2"><button className="items-btn"><h2>Defence</h2></button></div>
})

const Ministry=(()=>{
    return <div className="items mar2"><button className="items-btn"><h2>Politics</h2></button></div>
})

const More=(()=>{
    return <div className="items mar5"><button className="items-btn"><h2>More</h2></button></div>
})

export default Sports;
export {Entertainment,Defence,Ministry,More};