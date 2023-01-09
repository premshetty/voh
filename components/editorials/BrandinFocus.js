import Link from 'next/link'
import React from 'react'
import classes from './editorial.module.css'

const Card = () => {
    return (
        <div className={`${classes.IdeaLeaderCard2} h-[430px] min-w-[350px]`}>
            <img src="/persons/brand_infocus.png" alt="" />
            <div className='px-5 flex flex-col gap-4 mt-3'>
                <p>Cloudphysician is adding the touch of cloud-tech to augment care and amplify access.</p>
                <p className='text-[#606060] text-sm'>01 Nov, 2022</p>
                <button className='h-10 w-32 bg-button_cta font-bold text-white'>Read more</button>
            </div>
        </div>
    )
}
const BrandinFocus = () => {
    return (
        <div id='brandinfocus' className='px-10 w-full mt-10'>
            <Link href='/brandinfocus' >

                <div className='flex justify-between items-center border-b-[5px] pb-2 border-[#51B1A2]'>
                    <h2 className='font-bold text-xl'>Brand In Focus</h2>
                    <img src="/icons/right.svg" className='h-4' alt="" />
                </div>
            </Link>
            <div className={`flex gap-3 mt-10 ${classes.cardContainer} max-w-full overflow-scroll`}>
                <Card />
                <Card />
                <Card />

            </div>
        </div>
    )
}

export default BrandinFocus