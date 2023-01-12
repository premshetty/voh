import React from 'react'
import { Nav } from '../editorials/Editorials'
import { Card1, Card2, Card3, Card4 } from './Cards'
import AdverstismentBlock from '../reusalbles/AdverstismentBlock'
import SeeMore from '../reusalbles/SeeMore'
const ArticlleandBlogs = () => {
    return (
        <>
            <Nav />
            <div className='mt-32 px-3 md:px-10'>
                <div className='border-b-[5px] pb-2 border-[#A25B5D]'>
                    <h2 className='font-bold text-xl'>Article & Blog</h2>
                </div>
                <div className='flex h-auto md:flex-row flex-col md:h-[800px] justify-between items-start gap-3 mt-10'>
                    <div className='flex flex-col justify-between'>
                        <Card1 />
                        <Card1 />
                    </div>
                    <div className='flex justify-center items-end'>
                        <Card2 />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <Card3 />
                        <Card3 />
                        <Card3 />
                    </div>
                </div>
                <div className='mt-10'>
                    <h2 className='font-bold text-xl'>See more Articles & Blogs</h2>
                </div>
                <div className='flex md:flex-row flex-col-reverse h-auto mt-10 md:h-[1100px] w-full justify-between'>
                    <div className='flex flex-col h-full justify-between'>
                        <Card4 />
                        <Card4 />
                        <Card4 />
                    </div>
                    <div className='flex flex-col gap-5 md:gap-0 h-full justify-between'>
                        <AdverstismentBlock height='530px' width='600px' />
                        <AdverstismentBlock height='530px' width='600px' />
                    </div>
                </div>
                <SeeMore bg='#A25B5D' />
            </div >
        </>
    )
}

export default ArticlleandBlogs