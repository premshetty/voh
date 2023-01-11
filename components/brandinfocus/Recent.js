import React from 'react'
import classes from '../editorials/editorial.module.css'
import SeeMore from '../reusalbles/SeeMore'

const Card = () => {
    return (<div className={`${classes.IdeaLeaderCard2} flex flex-col  h-[430px] min-w-[300px] md:w-[430px]`}>
        <img src="/persons/brand_infocus.png" alt="" />
        <div className='px-5 flex flex-col  gap-8 mt-3'>
            <p>Cloudphysician is adding the touch of cloud-tech to</p>
            <p className='text-[#606060] text-sm'>01 Nov, 2022</p>
            <button className='h-10 w-32 bg-button_cta font-bold text-white'>Read more</button>
        </div>
    </div>)
}
const Recent = () => {
    return (
        <div>
            <h2 className='font-bold text-xl mt-20'>Recent</h2>
            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 justify-items-stretch overflow-x-scroll'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <SeeMore bg='#51B1A2' />

        </div>
    )
}

export default Recent