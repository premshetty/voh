import React from 'react'
import Carousel from '../reusalbles/Carousel'
import classes from './editorial.module.css'
import IdeaLeader from './IdeaLeader'
import Trending from './Trending'
const Nav = () => {
    return (
        <div className={`${classes.shadow} flex gap-8 text-sm h-10 bg-white shadow-2xl mt-[1px] justify-center items-center`}>
            <p> All Editorial</p>
            <p> Idea Leader</p>
            <p> Brand In Focus</p>
            <p> Article and Blog</p>
            <p> News and PR</p>
        </div>
    )
}
const Editorials = () => {
    return (
        <div>
            <Nav />
            <div className='px-10  w-full flex justify-between mt-10'>
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