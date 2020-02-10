import React from 'react'
import RoomFilter from './RoomFilter'
import RoomsList from './RoomsList'
// import {RoomConsumer} from '../Context'
import {withRoomConsumer} from '../Context'
import Loading from './Loading'

function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context
    if (loading) {
        return <Loading/>
    }
    return (
    <>
        <RoomFilter rooms={rooms}/>
        <RoomsList rooms={sortedRooms}/>
    </>
    )
}
export default withRoomConsumer(RoomContainer)


// export default function RoomContainer() {    
//     return (
//         <RoomConsumer>
//         {
//             (value) => {
//                     const {loading, sortedRooms, rooms} = value
//                 if(loading){
//                     return <Loading/>
//                 }
//             return (
//             <div>
//                 Hello from room container
//                 <RoomFilter rooms={rooms}/>
//                 <RoomsList rooms={sortedRooms}/>
//             </div>)
//             }
//         }
//         </RoomConsumer>
//     )
// }
