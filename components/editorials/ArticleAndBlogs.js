import React from 'react'
import classes from './editorial.module.css'


const Card = () => {
    return (
        <div className={`${classes.IdeaLeaderCard2} h-[320px] min-w-[620px] p-5 flex`}>
            <div className='px-5 flex flex-col gap-4 mt-3'>
                <h1 className='font-bold text-2xl'>Sexual Health: Under</h1>

                <p className='text-sm text-[#2C2A2A]'>The self -hygiene is one of the important of healthy habits which is very less thought. Of course, the doctors are constantly making points to the patients about self-hygiene as many of infectious conditions can be easily avoided if they follow the regular guidance of self-cleanliness.</p>
                <div className='w-full flex justify-between items-baseline'>
                    <p className='font-semibold'>By Rajavarman Kittu</p>
                    <p className='text-[#606060] text-sm'>01 Nov, 2022</p>
                </div>
                <button className='min-h-[40px] w-32 bg-button_cta font-bold text-white'>Read more</button>
            </div>
            <img src="/persons/rajavarman.png" className='w-[200px] h-auto' alt="" />

        </div>
    )
}
const ArticleAndBlogs = () => {
    return (
        <div className='px-10 w-full mt-10'>
            <div className='flex justify-between items-center border-b-[5px] pb-2 border-[#A25B5D]'>
                <h2 className='font-bold text-xl'>Article & Blog</h2>
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

export default ArticleAndBlogs