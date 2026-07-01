import React from 'react'
import { useState } from 'react'
const UseCallbackandUseMemo = () => {
   const [count,setCount]=useState(0)
  //  console.log("state change hui fucntion wapis chala")
  return (
    <div>
       <h1>count:{count}</h1>
       <button onClick={()=>setCount(count+1)}>+</button>
       <button onClick={()=>setCount(count-1)}>-</button>


</div>
  )
}

export default UseCallbackandUseMemo