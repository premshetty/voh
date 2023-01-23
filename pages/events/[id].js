import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Event1 from '../../components/events/subevents/Event1'
import Event2 from '../../components/events/subevents/Event2'
import Event3 from '../../components/events/subevents/Event3'
import { Nav } from '../../components/events/AllEvents'
const Eventid = () => {
    const [comp, setcomp] = useState('')
    const router = useRouter()
    const route = (router.query.id)
    useEffect(() => {
        const component = () => {
            if (route == 1) {
                setcomp(<Event1 />)
                console.log(route);
            }
            if (route == 2) {
                setcomp(<Event2 />)
            }
            if (route == 3) {
                setcomp(<Event3 />)
            }
        }
        component()
    }, [route])


    return (
        <>
            <Nav />
            <div className='mt-32 px-3 md:px-10'>
                {comp}
            </div>
        </>
    )
}

export default Eventid