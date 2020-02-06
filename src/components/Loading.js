import React from 'react'
import loadingGif from '../images/gif/loading-gear.gif'

export default function Loading() {
    return (
        <div className='loading'>
            <h4>ROOMS DATA LOADING...</h4>
            <img src={loadingGif} alt='loading'/>
        </div>
    )
}
