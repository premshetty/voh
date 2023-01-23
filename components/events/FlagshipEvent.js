import Link from 'next/link'
import React from 'react'
import SeeMore from '../reusalbles/SeeMore'
import { FlagshipEventCard, MainCard } from './AllEvents'

const FlagshipEvent = () => {
    return (
        <>
            <MainCard img="/event_banner.png" date='October 19 , 2022' addon={false} />
            <div id='idealeader' className=' w-full mt-10'>
                <Link href='/events/flagshipevents'>
                    <div className='flex justify-between items-center border-b-[5px] pb-2 border-[#A25B5D]'>
                        <h2 className='font-bold text-xl'>FlagShip Events</h2>
                        <img src="/icons/right.svg" className='h-4' alt="" />
                    </div>
                </Link>
            </div>
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3'>
                <FlagshipEventCard />
                <FlagshipEventCard />
                <FlagshipEventCard />
                <FlagshipEventCard />
                <FlagshipEventCard />
                <FlagshipEventCard />
                <FlagshipEventCard />
                <FlagshipEventCard />
                <FlagshipEventCard />

            </div>
            <SeeMore bg='#AD565B' />
        </>
    )
}

export default FlagshipEvent