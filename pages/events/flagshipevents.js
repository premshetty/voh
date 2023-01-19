import React from 'react'
import { Nav } from '../../components/events/AllEvents'
import FlagshipEvent from '../../components/events/FlagshipEvent'

const flagshipevents = () => {
    return (
        <>
            <Nav />
            <div className='mt-32 px-3 md:px-10'>
                <FlagshipEvent /></div>
        </>
    )
}

export default flagshipevents