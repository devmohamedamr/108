import React ,  { useContext }  from 'react'
import {counterContext} from '../Context/CountContextProvider.js'
export default function Number() {
  let {x,increment}  = useContext(counterContext)

  return (
    <>
          <h1>count is : {x}</h1>
          <button onClick={increment}>incremernt number</button>
    </>
  )
}
