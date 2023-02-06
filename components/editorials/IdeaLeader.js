import Link from 'next/link'
import React from 'react'
import classes from './editorial.module.css'

export const IdealeaderCard = () => {
    return (
        <div className={`${classes.IdeaLeaderCard} h-[470px] min-w-full md:min-w-[350px]`}>
            <img src="/persons/idea_lead_card.png" alt="" />
            <div className='px-5 flex flex-col gap-4 mt-3'>

                <h1 className='font-bold text-2xl font-sans'>Vishaka Goyal</h1>
                <p className='font-lg font-semibold font-proxima'>Clinicspots</p>
                <p className='font-proxima text-[#2C2A2A]'>Vishaka Goyal’s Q&A-led tech platform Clinicspots is determined to answer some of healthcare’s most stubborn questions - like information, transparency and access.</p>
                <p className='text-[#606060] font-proxima mb-5'>01 Nov, 2022</p>
                <button className='h-10 w-32 font-bold mb-5 mr-5'>Read more</button>
            </div>
        </div >
    )
}
const IdeaLeader = () => {
    return (
        <div id='idealeader' className='px-3 mb-10  md:px-10 w-full mt-12  md:mt-32'>
            <Link href='/idealeader'>
                <div className='flex justify-between items-center border-b-[3px] pb-2 border-[#5F9DC1]'>
                    <h2 className='font-bold text-xl font-sans'>Idea Leader</h2>
                    <img src="/icons/right.svg" className='h-4' alt="" />
                </div>
            </Link>
            <div className={`flex gap-3 mt-10 mb-10  ${classes.cardContainer} max-w-full overflow-scroll`}>
                <IdealeaderCard />
                <IdealeaderCard />
                <IdealeaderCard />

            </div>
        </div>
    )
}

export default IdeaLeader