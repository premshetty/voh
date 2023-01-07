import React from 'react'
import Carousel from '../reusalbles/Carousel'
import classes from './editorial.module.css'
import IdeaLeader from './IdeaLeader'
import Trending from './Trending'
export const Nav = () => {
    return (
        <div className={`${classes.shadow} flex gap-8 text-sm z-20 h-10 fixed top-16 w-full bg-white shadow-2xl mt-[1px] justify-center items-center`}>
            <p> All Editorial</p>
            <a href='#idealeader'> Idea Leader</a>
            <a href='#brandinfocus'> Brand In Focus</a>
            <a href='#articleandblogs'> Article and Blog</a>
            <a href='#newsandpr'> News and PR</a>
        </div>
    )
}
const Editorials = () => {
    return (
        <div>
            <Nav />
            <div className='px-10  w-full flex justify-between mt-32'>
                <div className='w-[65%] h-[483px]'>
                    <Carousel />
                </div>
                <Trending />
            </div>
            <IdeaLeader />
        </div>
    )
}

export default Editorials