import React from 'react'

export default function Card(props) {
  return (
    <>
        <h1>{props.title}</h1>
        <h2>{props.price}</h2>
    </>
  )
}
