import React from 'react'
import classes from './editorial.module.css'

const Card = () => {
    return (
        <div className={`${classes.IdeaLeaderCard} h-[500px] min-w-[350px]`}>
            <img src="/persons/idea_lead_card.png" alt="" />
            <div className='px-5 flex flex-col gap-4 mt-3'>

                <h1 className='font-bold text-2xl'>Vishaka Goyal</h1>
                <p className='font-lg font-semibold'>Clinicspots</p>
                <p>Vishaka Goyal’s Q&A-led tech platform Clinicspots is determined to answer some of healthcare’s most stubborn questions - like information, transparency and access.</p>
                <p className='text-[#606060]'>01 Nov, 2022</p>
                <button className='h-10 w-32 font-bold'>Read more</button>
            </div>
        </div>
    )
}
const IdeaLeader = () => {
    return (
        <div className='px-10 w-full mt-10'>
            <div className='flex justify-between items-center border-b-[5px] pb-2 border-[#5F9DC1]'>
                <h2 className='font-bold text-xl'>Idea Leader</h2>
                <img src="/icons/right.svg" className='h-4' alt="" />
            </div>
            <div className={`flex gap-3 mt-10 ${classes.cardContainer} max-w-full overflow-scroll`}>
                <Card />
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
        </div>
    )
}

export default IdeaLeader