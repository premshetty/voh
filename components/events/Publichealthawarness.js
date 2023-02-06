import Link from 'next/link'
import React from 'react'
import SeeMore from '../reusalbles/SeeMore'
import { MainCard, PublicAwarnessCard } from './AllEvents'

const Publichealthawarness = () => {
    return (
        <>
            <MainCard />
            <div id='idealeader' className=' w-full mt-10'>
                <Link href='/events/publichealthawarness'>
                    <div className='flex justify-between items-center border-b-[3px] pb-2 border-[#5F9DC1]'>
                        <h2 className='font-bold text-xl'>Public Health Awareness</h2>
                        <img src="/icons/right.svg" className='h-4' alt="" />
                    </div>
                </Link>
            </div>
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 sm:gap-y-6  md:grid-cols-3'>
                <PublicAwarnessCard />
                <PublicAwarnessCard />
                <PublicAwarnessCard />
                <PublicAwarnessCard />
                <PublicAwarnessCard />
                <PublicAwarnessCard />
                <PublicAwarnessCard />
                <PublicAwarnessCard />
                <PublicAwarnessCard />
            </div>
            <SeeMore bg='#5F9DC1' />
        </>

    )
}

export default Publichealthawarness