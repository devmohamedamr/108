import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Products() {
    let [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setData(res.data)
        })
    }, [])
    return (
        <>
            <h1>products</h1>
            <div className='container'>
                <div className='row'>
                    {data.map((product) =>
                        <div className="card col-md-3">
                            <img className="card-img-top" src={product.image} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}
