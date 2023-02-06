import Link from 'next/link'
import React from 'react'
import SeeMore from '../reusalbles/SeeMore'
import { BrandSolutionCard, MainCard } from './AllEvents'

const BrandSolutions = () => {
    return (
        <>
            <MainCard />
            <div id='idealeader' className=' w-full mt-10'>
                <Link href='/events/brandsolution'>
                    <div className='flex justify-between items-center border-b-[3px] pb-2 border-[#51B1A2]'>
                        <h2 className='font-bold text-xl'>Brand Solution</h2>
                        <img src="/icons/right.svg" className='h-4' alt="" />
                    </div>
                </Link>
            </div>
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3'>
                <BrandSolutionCard />
                <BrandSolutionCard />
                <BrandSolutionCard />
                <BrandSolutionCard />
                <BrandSolutionCard />
                <BrandSolutionCard />
                <BrandSolutionCard />
                <BrandSolutionCard />
                <BrandSolutionCard />

            </div>
            <SeeMore bg='#05B4A2' />
        </>
    )
}

export default BrandSolutions