import React from 'react'
import classes from './editorial.module.css'

const Card = () => {
    return (
        <div className={`${classes.IdeaLeaderCard} h-[520px] min-w-[350px]`}>
            <img src="/persons/news.png" alt="" />
            <div className='px-5 flex flex-col gap-4 mt-3'>

                <h1 className='font-bold text-2xl'>No dearth of platelets, beds for dengue patients in UP: Dy CM Pathak ..</h1>
                <p>Uttar Pradesh Deputy Chief Minister Brajesh Pathak on Thursday claimed there is no dearth of platelets and beds for the …..</p>
                <p className='text-[#606060]'>01 Nov, 2022</p>
                <button className='h-10 w-32 font-bold'>Read more</button>
            </div>
        </div>
    )
}
const NewsandPr = () => {
    return (
        <div id='newsandpr' className='px-10 w-full mt-10'>
            <div className='flex justify-between items-center border-b-[5px] pb-2 border-[#5F9DC1]'>
                <h2 className='font-bold text-xl'>News & PR</h2>
                <img src="/icons/right.svg" className='h-4' alt="" />
            </div>
            <div className={`flex gap-3 mt-10 ${classes.cardContainer} max-w-full overflow-scroll`}>
                <Card />
                <Card />
                <Card />

            </div>
        </div>
    )
}

export default NewsandPr