import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function Additem() {

    const [phone_name, setphone_name] = useState('')
    const [slug, setslug] = useState('')
    const [image, setimage] = useState('')

    const dispatch = useDispatch()

    function additem() {
        const item = {
            phone_name: phone_name,
            slug: slug,
            image: image
        }
        dispatch({ type: 'ADD_ITEM', payload: item })
    }


    return (
        <div className='row mt-5 justify-content-center'>
            <div className='col-md-6'>
                <input type='text' className='form-control' placeholder='Phone name' value={phone_name} onChange={(e) => { setphone_name(e.target.value) }} />
                <input type='text' className='form-control' placeholder='slug' value={slug} onChange={(e) => { setslug(e.target.value) }} />
                <input type='text' className='form-control' placeholder='image' value={image} onChange={(e) => { setimage(e.target.value) }} />
                <button className='btn btn-success' onClick={additem}>ADD ITEM</button>
            </div>

        </div>
    )
}
