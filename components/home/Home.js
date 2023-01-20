import React from 'react'
import Carousel from '../reusalbles/Carousel'
import Events from '../editorials/Events'
import { IdealeaderCard } from '../editorials/IdeaLeader'
import { NewsandprCard } from '../editorials/NewsandPr'
import { BrandinfocusCard } from '../editorials/BrandinFocus'
import Link from 'next/link'
import classes from '../editorials/editorial.module.css'
const Home = () => {
    return (
        <div className='flex mt-28 items-start justify-between'>
            <div className='flex flex-col gap-5 w-[67%]'>
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
                    <div className={`flex gap-3 mt-10 mb-10  ${classes.cardContainer} max-w-full overflow-scroll`}>
                        <IdealeaderCard />
                        <IdealeaderCard />
                        <NewsandprCard />
                        <NewsandprCard />
                        <BrandinfocusCard />
                    </div>
                </div>
            </div>
            <div className='w-[30%] -mt-20'>

                <Events />
            </div>
        </div>
    )
}

export default Home