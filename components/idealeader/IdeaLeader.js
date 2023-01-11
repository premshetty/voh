import React from 'react'
import { Nav } from '../editorials/Editorials'
import CarouselWithimagePreview from '../reusalbles/CarouselWithimagePreview'
import classes from '../editorials/editorial.module.css'
const Card = ({ img }) => {
    return (
        <div className={` relative h-auto md:h-[250px] p-3 w-full md:min-w-[350px] border-b-[1px] border-[#00000049]`}>
            <div className='flex flex-col md:flex-row gap-4'>
                <img className='h-[150px] md:h-[100px] w-auto' src={img} alt="" />
                <div className='flex flex-col gap-3'>
                    <h1 className='font-bold text-xl md:text-2xl'>Vishaka Goyal</h1>
                    <p className='font-sm md:font-lg font-semibold'>Clinicspots</p>
                    <p className='text-[#606060] font-sm'>01 Nov, 2022</p>
                </div>
            </div>
            <div className='md:px-5 flex flex-col gap-4 mt-3'>
                <p className='text-[#2C2A2A] text-[16px] font-[400]'>Vishaka Goyal’s Q&A-led tech platform Clinicspots is determined to answer some of healthcare’s most stubborn questions - like information, transparency and access.</p>
                <button className='h-10 w-32 bg-button_cta font-bold md:absolute bottom-2 right-2 text-white'>Read more</button>
            </div>
        </div>
    )
}
const IdeaLeader = () => {
    return (
        <>
            <Nav />
            <div className='px-3 md:px-10 w-full mt-32'>
                <div className='flex justify-between items-center border-b-[5px] pb-2 border-[#5F9DC1]'>
                    <h2 className='font-bold text-xl'>Idea Leader</h2>
                </div>

                <CarouselWithimagePreview />
                <div className='flex flex-col mfd:flex-row justify-between w-full'>
                    <div className='md:w-[48%]'>
                        <div className='flex mt-20 justify-between w-full items-center border-b-[5px] pb-2 border-[#489FC5]'>
                            <h2 className='font-bold text-xl'>See more stories of the Idea Leader</h2>
                        </div>
                        <div className='mt-10'>
                            <Card img="/persons/banner.jpg" />
                            <Card img="/persons/banner.jpg" />
                            <Card img="/persons/banner.jpg" />
                            <Card img="/persons/banner.jpg" />
                        </div>
                    </div>
                    <div className='md:w-[48%]'>
                        <div className='flex mt-20 justify-between w-full items-center border-b-[5px] pb-2 border-[#A25B5D]'>
                            <h2 className='font-bold text-xl'>Latest Blog</h2>
                        </div>
                        <div className='mt-10'>
                            <Card img="/persons/banner2.jpg" />
                            <Card img="/persons/banner2.jpg" />
                            <Card img="/persons/banner2.jpg" />
                            <Card img="/persons/banner2.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IdeaLeader