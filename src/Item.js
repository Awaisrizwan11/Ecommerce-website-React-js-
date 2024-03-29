import React from 'react'
import { useDispatch } from 'react-redux'


export default function Item({ item }) {

    const dispatch = useDispatch()

    return (
        <div className="shadow p-3 mb-5 bg-white rounded" >

            <h1>{item.phone_name}</h1>
            <img alt="product" src={item.image} className='img-fluid' />
            <h1>{item.slug}</h1>
            <button className='btn btn-primary' onClick={()=> { console.log("arr");  dispatch({ type: 'ADD_ITEM_TO_CART', payload: item }) }} >ADD TO CART</button>
        </div>
    )
}
