import React, { Component } from 'react'
import defaultImg from '../images/details-3.jpg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultImg: defaultImg
        }
    }

    static contextType = RoomContext
    
    render() {
        const {getRoom} = this.context
        const room = getRoom(this.state.slug)
        if (!room){
            return( <div className='error'>
                <h3>no room found...</h3>
                <Link to='/rooms' className='btn-primary'>
                    Back to Rooms
                </Link>
            </div>
            )
        }
        const {name,
            description,
            capacity,
            size,
            price, 
            extras, 
            buffet, 
            smoking, 
            images} = room
        const [mainImg,...defaultImg] = images
        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBCG}>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'>
                        Back to Rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className='single-room'>
                <div className='single-room-images'>
                    {defaultImg.map((img, index)=>{
                        return <img key={index} src={img} alt={name}/>
                    })}
                </div>
                <div className='single-room-info'>
                    <article className='desc'>
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className='info'>
                        <h3>info</h3>
                        <h6>price: ${price}</h6>
                        <h6>size : {size} square footage</h6>
                        <h6>capacity: {capacity > 1? `${capacity} people`: `${capacity} person`}</h6>
                        <h6>{smoking? 'smoking allowed': 'no smoking allowed'}</h6>
                        <h6>{buffet && 'complimentary buffet at Grand Lux Cafe'}</h6>
                    </article>
                </div>
            </section>
            <section className='room-extras'>
                <h6>extras</h6>
                <ul className='extras'>
                    {extras.map((item, index)=> {
                        return <li key={index}>-{item}</li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}
