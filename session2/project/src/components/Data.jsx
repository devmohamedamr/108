import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Data() {
  let [users,setUsers]= useState([])
    useEffect(()=>{
        getdata()
    })
    function getdata(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
          setUsers(res.data)  
          console.log(res.data)
        })
    }
  return (
    <>
    </>
  )
}
