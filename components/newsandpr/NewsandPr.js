import React from 'react'
import { Nav } from '../editorials/Editorials'
import classes from '../editorials/editorial.module.css'
export const Card1 = () => {
    return (
        <div className={`${classes.IdeaLeaderCard2} flex flex-col md:flex-row gap-5 relative md:h-[330px] mt-10 w-full pr-10 p-5`}>
            <img className='h-full md:w-[40%] object-cover' src="/persons/news.png" alt="" />
            <div className=' flex flex-col gap-4 '>
                <h2 className='font-bold text-[24px] md:text-[32px]'>No dearth of platelets, beds for dengue patients in UP: Dy CM Pathak ..</h2>
                <p className='text-sm md:text-lg'>Uttar Pradesh Deputy Chief Minister Brajesh Pathak on Thursday claimed there is no dearth of platelets and beds for the Uttar Pradesh Deputy Chief Minister Brajesh Pathak on Thursday claimed there is no dearth of platelets and beds for the Uttar Pradesh Deputy Chief Minister Brajesh Pathak on Thursday claimed there is no dearth of platelets and beds for the ….. </p>
                <p className='text-[#606060] text-sm'>12 Oct, 2022</p>
            </div>
            <button className='h-10 w-32 bg-button_cta absolute rounded-tl-2xl bottom-0 right-0 font-bold text-white'>Read more</button>
        </div>
    )
}
export const Card2 = () => {
    return (
        <div className={`${classes.IdeaLeaderCard2} flex gap-5 relative h-[330px]  md:w-[700px] pr-10 p-5`}>
            <div className=' flex flex-col gap-4 '>
                <h2 className='font-bold text-[20px] md:text-[28px]'>No dearth of platelets, beds for dengue patients in UP: Dy CM Pathak ..</h2>
                <p className='text-base'>Uttar Pradesh Deputy Chief Minister Brajesh Pathak on Thursday claimed there is no dearth of platelets and  </p>
                <p className='text-[#606060] text-sm'>12 Oct, 2022</p>
            </div>
            <img className='h-full w-[150px] md:w-[250px] rounded-2xl object-cover' src="/persons/news.png" alt="" />
            <button className='h-10 w-32 bg-button_cta absolute rounded-tr-2xl bottom-0 left-0 font-bold text-white'>Read more</button>
        </div>
    )
}
const NewsandPr = () => {
    return (
        <>
            <Nav />
            <div className='px-3 md:px-10 w-full mt-32'>
                <div className='flex justify-between items-center border-b-[5px] pb-2 border-[#36AC9B]'>
                    <h2 className='font-bold text-xl'>News & PR</h2>
                </div>
                <Card1 />
                <div className='mt-10'>
                    <h2 className='font-bold text-xl'>Latest New & PR</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-8 justify-items-stretch mt-10'>
                        <Card2 />
                        <Card2 />
                        <Card2 />
                        <Card2 />
                        <Card2 />
                        <Card2 />
                    </div>
                </div>
                <div className='mt-10'>
                    <h2 className='font-bold text-xl'>Treading</h2>
                    <div className='flex mt-10 flex-wrap gap-5 justify-between items-baseline'>
                        <img src="/persons/news.png" className={`${classes.IdeaLeaderCard2} md:h-[180px] w-auto `} alt="" />
                        <img src="/persons/news.png" className={`${classes.IdeaLeaderCard2} md:h-[180px] w-auto `} alt="" />
                        <img src="/persons/news.png" className={`${classes.IdeaLeaderCard2} md:h-[180px] w-auto `} alt="" />
                        <img src="/persons/news.png" className={`${classes.IdeaLeaderCard2} md:h-[180px] w-auto `} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsandPr