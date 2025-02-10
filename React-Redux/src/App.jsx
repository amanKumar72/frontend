import Counter from "./Counter"
import './App.css'
import { useDispatch } from "react-redux"
import {  useState } from "react"
import { addN, decrement, increment, reset } from "./store/slices/CounterSlice"
const App = () => {
  let [num,setNum]=useState(0)
  const dispatch=useDispatch();
  return (
    <>
    {/* <div className="container simple-redux">
      <button onClick={()=>dispatch({type:'INCREMENT'})}>increment</button>
      <Counter/>
      <button onClick={()=>dispatch({type:'DECREMENT'})}>decrement</button>
      <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
      <input type="number" value={num} onChange={e=>setNum(e.target.value)}  />
      <button onClick={()=>dispatch({type:'ADD_N',num})}>Add</button>
    </div> */}
    
    <div className="container react-redux-toolkit">
      <button onClick={()=>dispatch(increment())}>inc</button>
      <Counter/>
      <button onClick={()=>dispatch(decrement())}>dec</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
      <input type="number" value={num} onChange={e=>setNum(e.target.value)}  />
      <button onClick={()=>dispatch(addN(num))}>add</button>
    </div>
    </>
  )
}

export default App
