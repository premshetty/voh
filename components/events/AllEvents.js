import React from 'react'
import classes from '../editorials/editorial.module.css'
export const Nav = () => {
    return (
        <div className={`${classes.shadow} ${classes.navcontainer} pl-5   overflow-x-scroll md:flex gap-8 text-sm z-20 h-10 hidden md:fixed top-[63px] w-full bg-white shadow-2xl mt-[1px] justify-start md:justify-center items-center`}>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/editorials'> All Events</a>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/editorials#idealeader'> Public Health Awarness</a>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/editorials#brandinfocus'>Brand Solutions</a>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/editorials#articleandblogs'> FlagShip Events</a>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/editorials#newsandpr'> Event 1</a>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/editorials#newsandpr'> Event 2</a>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/editorials#newsandpr'> Event 3</a>
        </div>
    )
}
const AllEvents = () => {
    return (
        <div>AllEvents</div>
    )
}

export default AllEvents