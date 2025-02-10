import { useState } from "react"
import { Outlet } from "react-router-dom"

// eslint-disable-next-line react/prop-types
function Clock({colorval}) {
    const [time,setTime]=useState(new Date().toLocaleTimeString())
    setTimeout(()=>setTime(new Date().toLocaleTimeString()),1000)
 

  return (
    <div>
        <h1>Current Time</h1>
        <h2 style={{color:colorval}}>{time}</h2>
        <Outlet></Outlet>
    </div>
  )
}

export default Clock