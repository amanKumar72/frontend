import { useSelector } from "react-redux"

const Counter = () => {
    // const count=useSelector(state=>state) //for simple redux
    const count=useSelector(state=>state.counter.value) //for reduc-toolkit we have to accress the name of the reducer
    return (
        <div>
      {count}
      
    </div>
  )
}

export default Counter
