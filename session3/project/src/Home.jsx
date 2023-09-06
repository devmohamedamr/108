import React from 'react'
import { useForm } from 'react-hook-form'
export default function Home() {
    let { register , handleSubmit } = useForm()
  return (
    <>
        <form onSubmit={handleSubmit(login)}>
            <input type='text' {...register('email')} />
            <input type='password' {...register('password')} />
            <input type='submit' />
        </form>
    </>
  )

  function login(request){
    console.log(request)
  }
}
