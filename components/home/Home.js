import React from 'react'
import Carousel from '../reusalbles/Carousel'
import Events from '../editorials/Events'
import { IdealeaderCard } from '../editorials/IdeaLeader'
import { BrandinfocusCard } from '../editorials/BrandinFocus'
import Link from 'next/link'
import classes from '../editorials/editorial.module.css'
import { LatestBlogCard } from '../idealeader/IdeaLeader'
import { BlogCard4 } from '../articleandblogs/Cards'
import AllCard from '../allBroadCast/VoiceOfChange'

export const NewsandprCard = () => {
    return (
        <div className={`${classes.IdeaLeaderCard} bg-white  h-[520px] max-w-[400px] min-w-[350px]`}>
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
const Home = () => {
    return (
        <>
            <div className='flex mt-28 flex-col md:flex-row items-start justify-between'>
                <div className='flex flex-col gap-5 w-full  md:w-[67%]'>
                    <Carousel height='500px'
                        img1='/award.png'
                        img2='/persons/brand_infocus.png'
                        img3='/allbroadcast/groupImg.png'
                    />
                    <div id='idealeader' className='px-3 mb-10  md:px-10 w-full '>
                        <Link href='/idealeader'>
                            <div className='flex justify-between items-center border-b-[5px] pb-2 border-[#5F9DC1]'>
                                <h2 className='font-bold text-xl'>Idea Leader</h2>
                                <img src="/icons/right.svg" className='h-4' alt="" />
                            </div>
                        </Link>
                        <div className={`flex gap-3 mt-10  ${classes.cardContainer} max-w-full  overflow-scroll`}>
                            <IdealeaderCard />
                            <IdealeaderCard />
                            <NewsandprCard />
                            <NewsandprCard />
                            <BrandinfocusCard />
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[30%] -mt-20'>

                    <Events />
                </div>

            </div>
            <div className='bg-[#EBEBEB] p-3 md:p-10'>
                <p className='text-2xl font-bold'>News & PR</p>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-10'>
                    <NewsandprCard />
                    <NewsandprCard />
                    <NewsandprCard />
                </div>
            </div>
            <div className='border-b-[5px] mt-10 pb-2 border-[#A25B5D]'>
                <h2 className='font-bold text-xl'>Latest Blog</h2>
            </div>
            <div className='mt-10 flex flex-col md:flex-row gap-6'>
                <div>

                    <LatestBlogCard img="/persons/banner2.jpg" />
                    <LatestBlogCard img="/persons/banner2.jpg" />
                    <LatestBlogCard img="/persons/banner2.jpg" />
                </div>
                <div>

                    <BlogCard4 bg='white' />
                    <BlogCard4 bg='white' />
                </div>
            </div>
            <h2 className='font-bold text-xl mt-20'>VOH Tv</h2>
            <div className={`${classes.cardcontainer} flex overflow-x-scroll w-full gap-10`}>
                <img src="/allbroadcast/cardIBroad1.png" className='h-[380px]' />
                <img src="/allbroadcast/cardIBroad1.png" className='h-[380px]' />
                <AllCard />
                <AllCard />
                <img src="/allbroadcast/cardImg1.png" className='h-[380px]' />
                <img src="/allbroadcast/cardIBroad1.png" className='h-[380px]' />
            </div>
            <div id='startupecosystem' className={`h-screen relative w-full bg-cover bg-no-repeat `} style={{ backgroundImage: `url('/steco.png')` }}>
                <div className={`${classes.bgshadow} w-full h-full flex-col opacity-50 z-10 flex justify-center items-center`}></div>
                <div className='w-full h-full absolute top-0 left-0 flex-col gap-10 flex justify-center items-center'>
                    <h2 className='text-5xl w-[300px] text-center  font-bold text-white'>Startup Ecosystem</h2>
                    <p className='text-base w-[500px] text-center   text-white'>See how the tech and healthcare are working hand in hand in this exclusive platform.</p>
                    <button className='h-12 opacity-100 px-5 text-white hover:text-button_cta font-[500] bg-button_cta hover:bg-white'>
                        View Details
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home