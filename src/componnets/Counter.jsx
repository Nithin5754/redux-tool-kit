import { useDispatch, useSelector } from "react-redux"
import { addCounter, removeCounter } from "../utils/counterSlice"

const Counter = () => {

  const dispatch=useDispatch()
  const data=useSelector((store)=>store.counter.value)
  console.log(data);
  return (
    <div>
      <p>{data}</p>
      <div className="">
        <button onClick={()=>dispatch(addCounter())}>add</button>
        <button onClick={()=>dispatch(removeCounter())}>remove</button>
      </div>



    </div>
  )
}
export default Counter