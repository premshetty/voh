import React from 'react'
import classes from './editorial.module.css'
const Card = ({ img, name, para, date, btnclr }) => {
    return (
        <div className='w-full min-h-[150px]  border-b-[1px] border-[#707070] border-opacity-40 relative flex'>
            <button className='h-6 rounded-r-full w-auto pl-1 pr-3 bg-[#AD565B] absolute text-white'>Upcoming </button>
            <div className='w-[150px] h-[150px] bg-link_text_lg flex justify-center items-center text-white font-bold text-2xl text-center'>28 Jan 2023</div>
            <div className='flex flex-col justify-between ml-5 h-[150px] md:h-[140px]'>
                <h2 className='font-semibold whitespace-nowrap text-[black] text-base md:text-lg'>{name}</h2>
                <p className='text-[#606060] text-xs md:text-sm'>{para}</p>
                <div className='flex justify-between w-[100%] items-center'>
                    <p className='text-[#7C7C7C] text-xs flex gap-1 items-center'><img className='h-5' src="/icons/location.svg" alt="" />Mumbai</p>
                    <button className={`border border-[#A84266] text-xs md:text-sm px-2 h-5 md:px-5 md:h-8 text-[#A84266] rounded-[15px]`}>Register Now</button>
                </div>
            </div>
        </div>
    )
}
const Events = () => {
    return (
        <div className={`${classes.trendingnow} p-4 w-full  mt-20 min-h-[850px] `}>
            <h1 className='text-[black] font-bold text-2xl'>Events</h1>
            <div className={` ${classes.cardContainer} mt-8 flex flex-col gap-2 overflow-scroll h-[720px]`} >
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and '
                    para='Leadership, management essentials,'
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#5F9DC1' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and '
                    para='Leadership, management essentials,'
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#5F9DC1' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and '
                    para='Leadership, management essentials,'
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#5F9DC1' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and '
                    para='Leadership, management essentials,'
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#51B1A2' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and '
                    para='Leadership, management essentials,'
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#51B1A2' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and '
                    para='Leadership, management essentials,'
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#51B1A2' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and '
                    para='Leadership, management essentials,'
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#A25B5D' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and '
                    para='Leadership, management essentials,'
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#A25B5D' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and '
                    para='Leadership, management essentials,'
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#A25B5D' />
            </div>
        </div>
    )
}

export default Events