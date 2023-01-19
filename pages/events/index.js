import React from 'react'
import AllEvents, { Nav } from '../../components/events/AllEvents'

const index = () => {
    return (
        <>
            <Nav />
            <div className='mt-32'><AllEvents /></div>
        </>
    )
}

export default index