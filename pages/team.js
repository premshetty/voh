import React from 'react'
import { Nav } from '../components/events/AllEvents'
import Team from '../components/team/Team'

const team = () => {
    return (
        <>
            <Nav />
            <div className='mt-32 px-3 md:px-10'>
                <Team /></div>
        </>
    )
}

export default team