import React, { useState } from 'react'
import Carousel from '../reusalbles/Carousel'
import IncEvents from './EventsIncubator'
import Events from '../editorials/Events'
import { IdealeaderCard } from '../editorials/IdeaLeader'
import { BrandinfocusCard } from '../editorials/BrandinFocus'
import Link from 'next/link'
import classes from '../editorials/editorial.module.css'
import { LatestBlogCard } from '../idealeader/IdeaLeader'
import { BlogCard4 } from '../articleandblogs/Cards'
import AllCard from '../allBroadCast/VoiceOfChange'
import ImageSlider from './ImageSlider'
export const NewsandprCard = () => {
    return (
        <div className={`${classes.IdeaLeaderCard} bg-white  h-[470px] max-w-[400px] min-w-[350px]`}>
            <img src="/persons/news.png" alt="" />
            <div className='px-5 flex flex-col gap-4 mt-3'>

                <h1 className='font-bold text-2xl font-sans'>No dearth of platelets, beds for dengue patients in UP: Dy CM Pathak ..</h1>
                <p className='text-[#2C2A2A] opacity-80 font-proxima'>Uttar Pradesh Deputy Chief Minister Brajesh Pathak on Thursday claimed there is no dearth of platelets and beds for the …..</p>
                <p className='text-[#2C2A2A] opacity-80 font-proxima'>01 Nov, 2022</p>
                <button className='h-10 w-32 font-bold'>Read more</button>
            </div>
        </div>
    )
}
const videolist = {
    1: <iframe className='aspect-auto h-[300px] w-full' src="https://www.youtube.com/embed/ilsFHj7EQ5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    2: <iframe className='aspect-auto h-[300px] w-full' src="https://www.youtube.com/embed/P_uHK1M65Po" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    3: <iframe className='aspect-auto h-[300px] w-full' src="https://www.youtube.com/embed/MPEqYB0NVAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
}
const Home = () => {
    const [activeCard, setActiveCard] = useState(1)
    const PlaylistCard = () => {
        const cards = [1, 2, 3].map(item => {
            if (activeCard === item) {
                return <div onClick={() => setActiveCard(item)} className=' cursor-pointer md:w-[90%] flex flex-col items-center justify-center h-[200px] md:p-10 border-b border-[#ffffff52]  '>
                    <div className='flex gap-5 border-[4px] border-[#05B4A2] w-full  p-5 relative h-[160px]'>
                        <p className='text-[#05B4A2] absolute bg-[#5F5F5F] top-[-13px!important] px-4'>Now Playing</p>
                        <img className='w-[100px] md:w-[170px] object-cover' src="/allbroadcast/groupImg.png" alt='youtube thumbnail' />
                        <div className='flex flex-col flex-grow justify-between h-full'>
                            <p className='md:text-xl text-sm text-white font-bold font-proxima'>National Diabetes Conclave | Education to protect tomorrow</p>
                            <p className='text-white'>30:00</p>
                        </div>
                    </div>
                </div>
            } else {
                return <div onClick={() => setActiveCard(item)} className='cursor-pointer flex gap-5 md:w-[95%] h-[200px] md:p-10 border-b border-[#ffffff52]'>
                    <div className='flex gap-5 w-full  p-5 h-[140px]'>
                        <img className='w-[100px] md:w-[170px] object-cover' src="/allbroadcast/groupImg.png" alt='youtube thumbnail' />
                        <div className='flex flex-col flex-grow w-full justify-between h-full'>
                            <p className='md:text-xl text-sm text-white font-bold font-proxima hover:text-[#05B4A2]'>National Diabetes Conclave | Education to protect tomorrow</p>
                            <p className='text-white'>30:00</p>
                        </div>
                    </div>
                </div>
            }
        })
        return cards
    }
    return (
        <>
            <div className='flex mt-28 flex-col-reverse md:flex-row items-start justify-between'>
                <div className='flex flex-col gap-5 w-full  md:w-[67%]'>
                    <Carousel height='500px'
                        img1='/award.png'
                        img2='/persons/brand_infocus.png'
                        img3='/allbroadcast/groupImg.png'
                    />
                    <div id='idealeader' className='px-3 mb-10  md:px-10 w-full '>
                        <Link href='/editorials'>
                            <div className='flex justify-between items-center border-b-[3px] pb-2 border-[#5F9DC1]'>
                                <h2 className='font-bold text-xl font-sans'>Editorials</h2>
                                <img src="/icons/right.svg" className='h-4' alt="" />
                            </div>
                        </Link>
                        <div className={`flex gap-3 mt-10  ${classes.cardContainer} max-w-full  overflow-scroll`}>
                            <IdealeaderCard />
                            <IdealeaderCard />
                            <BrandinfocusCard />
                            <BrandinfocusCard />
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[30%] -mt-20'>

                    <Events />
                </div>

            </div>
            <div className='bg-[#EBEBEB] p-3 md:p-10 md:w-[98.6vw] md:-ml-10'>
                <p className='text-2xl font-bold font-sans'>News & PR</p>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-10'>
                    <NewsandprCard />
                    <NewsandprCard />
                    <NewsandprCard />
                </div>
            </div>
            <div className='border-b-[3px] mt-10 pb-2 border-[#A25B5D]'>
                <h2 className='font-bold text-xl font-sans ml-10'>Latest Blog</h2>
            </div>
            <div className='mt-10 flex flex-col md:flex-row gap-6 '>
                <div>
                    <LatestBlogCard img="/persons/banner2.jpg" />
                    <LatestBlogCard img="/persons/banner2.jpg" />
                    <LatestBlogCard img="/persons/banner2.jpg" />
                </div>
                <div className='flex flex-col justify-between h-full'>
                    <BlogCard4 bg='white' />
                    <BlogCard4 bg='white' />
                </div>
            </div>
            <div className='md:h-screen mt-10 md:w-[98.6vw] md:-ml-10  h-auto bg-[#5F5F5F]  flex flex-col md:flex-row '>
                <div className='md:w-[55%] h-full flex flex-col justify-around p-10 relative'>
                    <p className='font-sans text-white text-2xl font-bold'>Video Campaigns</p>
                    {videolist[activeCard]}
                    <p className='font-proxima font-[500] text-white text-xl'>National Diabetes Conclave | Education to protect tomorrow</p>
                    <p className='font-proxima text-white opacity-80'>Care is changing, and it is time to take a fresh look at the ecosystem infrastructure that sustains and powers it. Voice of Healthcare brings together leading figures to initiate much-needed dialogues and expedient disruptions to achieve that goal.</p>
                    <p className='cursor-pointer flex gap-2 font-sans text-[#05B4A2] font-bold text-xl'>View Highlights <img src="/icons/longarrowright.svg" alt="" /> </p>
                    <div className='hidden md:block absolute h-[80%] bg-[#ffffff52] w-[2px] right-0 '>
                    </div>
                </div>
                <div className='md:w-[45%] w-full h-full flex flex-col justify-around md:py-10 p-5 '>
                    <p className='font-sans text-white text-2xl font-bold'>Playlist</p>
                    <div>
                        <PlaylistCard />
                    </div>
                </div>
            </div>
            <ImageSlider />
            <div className='mt-10 w-full'>

                <h2 className='font-bold text-xl mt-20 font-sans'>VOH Incubator</h2>

                <div className='w-full flex-col md:flex-row flex justify-between md:h-[600px] mt-10'>
                    <div className='flex flex-col relative gap-10 md:w-[60%]'>
                        <img className='h-[400px]' src="/voh_incubator.png" alt="" />
                        <h3 className='text-2xl font-sans  text-[#ED960F] font-bold ml-2'>India’s only Health- Centric Startup Incubator</h3>
                        <p className='text-base font-proxima w-[80%] ml-2'>We are INDIA’S FIRST AND FOREMOST ENTREPRENEURIAL ECOSYSTEM FOCUSED ON HEALTHCARE, designed to help healthcare-focused founders If you are a healthcare start-up looking for a launchpad, look no further!</p>
                        <button className='bg-[#FB9100] font-sans text-white text-xl w-[150px] h-10 rounded-[36px] right-5 absolute bottom-[-40px]'>APPLY NOW</button>
                    </div>
                    <div className='w-full md:w-[35%] md:-mt-20  '>
                        <IncEvents height='630px' btnclr='#5F9DC1' />
                    </div>
                </div>
            </div>
            <h2 className='font-bold text-xl mt-24 font-sans'>VOH Tv</h2>
            <div className={`${classes.cardcontainer} mt-10 flex overflow-x-scroll w-full gap-10`}>
                <img src="/allbroadcast/cardIBroad1.png" className='h-[400px]' />
                <img src="/allbroadcast/cardIBroad1.png" className='h-[400px]' />
                <AllCard />
                <AllCard />
                <img src="/allbroadcast/cardImg1.png" className='h-[400px]' />
                <img src="/allbroadcast/cardIBroad1.png" className='h-[400px]' />
            </div>
        </>
    )
}

export default Home