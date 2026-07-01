import React, { useState } from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'
const UseMemo = () => {
    const[text,setText]=useState("")
    const[count,setCount]=useState(0)

    function showFunction(){
        // console.log("ye calculation heavy calculation hai")
        console.log("TESTING 123 XYZ")

    let sum=Math.floor(Math.random() * 100)
        console.log(sum)
    for(let i=0; i<1000; i++){
        sum+=i
        console.log("everything is happening")
    }
    return sum
    }

    const result=useMemo(()=>{
  console.log("useMemo callback");
        return showFunction()
    },[])
  return (
    <div>
        
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <p>{result}</p>
        
            </div>
  )
}

export default UseMemo