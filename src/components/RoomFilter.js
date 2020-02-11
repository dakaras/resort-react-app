import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from '../components/Title'

//get all unique values for filter menus from array using Set
const getUnique = (rooms, value)=>{
    return [...new Set(rooms.map(room => room[value]))]
}
export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext)
    const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, smoking, buffet} = context
    
    //get unique room types
    let types = getUnique(rooms, 'type')
    //add all to room types
    types = ['all', ...types]
    //map to JSX
    types = types.map((room,index)=> {
        return <option value={room} key={index}>{room}</option>
    })
    let guests = getUnique(rooms, 'capacity')
    guests = guests.map((guest, index) => {
        return <option key={index} value={guest}>{guest}</option>
    })

    return (
        <section className='filter-container'>
            <Title title='search rooms'/>
            <form className='filter-form'>
                {/*select type*/}
                <div className='form-group'>
                    <label htmlFor='type'>room type</label>
                    <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/*end of select type*/}
                {/*select capacity*/}
                    <div className='form-group'>
                        <label htmlFor='capacity'>
                            guests
                        </label>
                        <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChange}>
                            {guests}
                        </select>
                    </div>
                {/*end of select capacity*/}
                {/*room price range*/}
                    <div className='form-group'>
                        <label htmlFor='price'>room price ${price}</label>
                        <input type='range' name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control'></input>
                    </div>
                {/*end of room price range */}
                {/*room size inputs */}
                <div className='form-group'>
                    <label htmlFor='size'>room size</label>
                    <div className='size-inputs'>
                        <input type='number' name='minSize' min={minSize} id='size' value={minSize} onChange={handleChange} className='size-input'></input>
                        <input type='number' name='maxSize' min={maxSize} id='size' value={maxSize} onChange={handleChange} className='size-input'></input>
                    </div>
                </div>
                {/*end of room size inputs */}
            </form>
        </section>
    )
}
