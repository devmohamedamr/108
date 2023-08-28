import React, { useEffect, useState } from 'react'

export default function Count() {
    useEffect(()=>{
      console.log("test")
    })
    let [count,setCount] = useState(0)

    function increment(){
        setCount(++count)
    }
  return (
    <>
        <h1>count is : {count}</h1>
        <button onClick={increment}>increment</button>
    </>
  )
}
