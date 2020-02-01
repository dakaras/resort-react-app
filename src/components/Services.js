import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaSwimmingPool, FaWifi, FaTaxi} from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: 'Tao Nightclub',
                info: 'The world-renowned New York hotspot and celebrity hangout, exclusively in The Venetian. Since opening in September 2005, this design-driven dining and entertainment complex in The Venetian has proven to be a hot spot like its sister venue in New York City.'
            },
            {
                icon: <FaSwimmingPool/> ,
                title: 'Pool Decks and Cabanas',
                info: 'Your ultimate pool day awaits with a renovated pool deck situated over two acres.  The newly renovated deck includes four large pools, three of them infinity.  A splash pad, in pool ledge loungers, and daybeds in the center of the pools combine to create a contemporary, luxurious oasis.  Enjoy the heated pools all winter long.'
            },
            {
                icon: <FaWifi/>,
                title: 'Free Internet',
                info: 'In-suite Internet access (Wi-Fi or Ethernet) for higher tiers can be purchased on your device directly from your suite or by contacting the Front Desk at 702.414.2121. Please contact Concierge Services for resort-wide assistance at 866.725.2990 or email Resort Services.'
            },
            {
                icon: <FaTaxi/>,
                title: 'Car Rentals | Limosines | Shuttle Service',
                info: 'To drive, arrive and depart in style, the concierge can assist with car rentals, reserve town cars, limousines, or shuttle service, please contact Concierge Services at 702.414.4300.'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services'/>
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
