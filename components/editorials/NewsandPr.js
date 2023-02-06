import Link from 'next/link'
import React from 'react'
import classes from './editorial.module.css'

export const NewsandprCard = () => {
    return (
        <div className={`${classes.IdeaLeaderCard} h-[520px] min-w-[350px]`}>
            <img src="/persons/news.png" alt="" />
            <div className='px-5 flex flex-col gap-4 mt-3'>

                <h1 className='font-bold text-2xl font-sans'>No dearth of platelets, beds for dengue patients in UP: Dy CM Pathak ..</h1>
                <p className='font-proxima'>Uttar Pradesh Deputy Chief Minister Brajesh Pathak on Thursday claimed there is no dearth of platelets and beds for the …..</p>
                <p className='text-[#606060] font-proxima'>01 Nov, 2022</p>
                <button className='h-10 w-32 font-bold'>Read more</button>
            </div>
        </div>
    )
}
const NewsandPr = () => {
    return (
        <div id='newsandpr' className='px-3 md:px-10 w-full mt-10'>
            <Link href='/newsandpr'>
                <div className='flex justify-between items-center border-b-[3px] pb-2 border-[#5F9DC1]'>
                    <h2 className='font-bold text-xl'>News & PR</h2>
                    <img src="/icons/right.svg" className='h-4' alt="" />
                </div>
            </Link>
            <div className={`flex gap-3 mt-10 ${classes.cardContainer} max-w-full overflow-scroll`}>
                <NewsandprCard />
                <NewsandprCard />
                <NewsandprCard />
                <NewsandprCard />
            </div>
        </div>
    )
}

export default NewsandPr