import { useState } from "react";

function State() {
 const [counter,setCounter]=useState(0);

 const handleCounter=(opr,value=1)=>{
  if(opr==="+"){
    setCounter(counter+value);
  }else if(opr==="-"){
    setCounter(counter-value);
  }else {
    setCounter(counter);
  }
 }


 const [show,setShow] = useState(true);
 const toggleShow=()=>{
  setShow(!show);
 }
  return (
    <>
    <button onClick={()=>handleCounter('+')}>+</button>
    <button onClick={()=>handleCounter('-')}>-</button>
    <button onClick={toggleShow}>Toggle</button>
    {show ? <h1>{counter}</h1>:null}
    </>
  );
}

export default State