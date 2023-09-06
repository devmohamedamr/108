import React, { useEffect, useState } from 'react'
import { useForm } from  'react-hook-form'
import Card from './Card'
export default function Add() {
    let {register,handleSubmit,formState:{ errors }} = useForm()
    let [data,setData] = useState([])
    useEffect(()=>{
        console.log(data)
    })
  return (
    <>
        <form onSubmit={handleSubmit(addform)}>
            <input type='text' {...register('title',{required:true})} />
            { errors.title && <h1>this faild is required</h1> }
            <input type='text' {...register('price',{required:true})} />
            { errors.price  && <h1>price is required</h1> }
            <input type='submit' value='add' /> 
        </form>

        {data.map((w)=> 
         <Card title={w.title} price={w.price} />
        )}
    </>
  )

  function addform(req){
    let newdata = [...data]
    newdata.push(req)
    setData(newdata)
  }
}
