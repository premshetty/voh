import React from 'react'
import Carousel from '../reusalbles/Carousel'
import classes from './editorial.module.css'
import IdeaLeader from './IdeaLeader'
import Trending from './Trending'
export const Nav = () => {
    return (
        <div className={`${classes.shadow} ${classes.navcontainer} pl-5   overflow-x-scroll md:flex gap-8 text-sm z-20 h-10 hidden md:fixed top-[63px] w-full bg-white shadow-2xl mt-[1px] justify-start md:justify-center items-center`}>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/editorials'> All Editorial</a>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/editorials#idealeader'> Idea Leader</a>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/editorials#brandinfocus'> Brand In Focus</a>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/editorials#articleandblogs'> Article and Blog</a>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/editorials#newsandpr'> News and PR</a>
        </div>
    )
}
const Editorials = () => {
    return (
        <div>
            <Nav />
            <div className='px-3 md:px-10 flex-col md:flex-row  w-full flex justify-between mt-32'>
                <div className=' w-full  md:w-[65%]  h-[300px] md:h-[483px]'>
                    <Carousel
                        img1="/persons/banner.jpg" img2="/persons/brand_infocus.png" img3="/persons/banner2.jpg"
                    />
                </div>
                <Trending />
            </div>
            <IdeaLeader />
        </div>
    )
}

export default Editorials