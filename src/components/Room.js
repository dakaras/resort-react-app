import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/details-1.jpg'

export default function Room({room}) {
    const {name, images, slug, price} = room
    
    return (
        <article className='room'>
            <div className='img-container'>
                <img src={images[0] || defaultImg} alt='single-room' height="250" width="250"/>
              <div className='price-top'>
                <h6>${price}</h6>
                <p>per night</p>
            </div>
            </div>
            
        </article>
    )
}
