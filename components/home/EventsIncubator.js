import React from 'react'
import classes from '../editorials/editorial.module.css'
const Card = ({ img, name, para, date, btnclr }) => {
    return (
        <div className='w-full min-h-[150px]  border-b-[1px] border-[#707070] border-opacity-40 relative flex'>
            <div style={{ backgroundImage: `url('/cashware_events.png')` }} className='min-w-[120px] max-h-[120px] bg-[#489FC5] flex justify-center items-center text-white font-bold text-2xl text-center'></div>
            <div className='flex flex-col justify-between ml-5 h-[150px] md:h-[140px]'>
                <h2 className='font-semibold whitespace-nowrap text-[black] text-base md:text-lg font-proxima'>{name}</h2>
                <p className='text-[#606060] opacity-80 text-xs md:text-sm font-proxima'>{para}</p>
                <div className='flex justify-between w-[100%] items-center'>
                    <p className='text-[#7C7C7C] text-xs flex gap-1 items-center'><img className='h-5' src="/icons/location.svg" alt="" />Mumbai</p>
                    <button className={`border hover:bg-[#FB9100] hover:text-white border-[#FB9100] text-xs md:text-sm px-2 h-5 md:px-5 md:h-8 text-[#FB9100] rounded-[15px]`}>Watch Now</button>
                </div>
            </div>
        </div>
    )
}
const Events = ({ img, btnclr, heading, para, icon, location, height }) => {
    return (
        <div style={{ maxHeight: height, minHeight: 0 }} className={`${classes.trendingnow} ${classes.cardcontainer} overflow-y-scroll p-4 w-full  mt-20 min-h-[850px] `}>
            <h1 className='text-[black] font-bold text-2xl font-sans'>Events</h1>
            <div className={` ${classes.cardContainer} mt-8 flex flex-col gap-2 overflow-scroll h-[780px]`} >
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and '
                    para='Leadership, management essentials, strategy development and implementation, business model innovation '
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#5F9DC1' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and '
                    para='Leadership, management essentials, strategy development and implementation, business model innovation '
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#5F9DC1' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and '
                    para='Leadership, management essentials, strategy development and implementation, business model innovation '
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#5F9DC1' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and '
                    para='Leadership, management essentials, strategy development and implementation, business model innovation '
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#51B1A2' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and '
                    para='Leadership, management essentials, strategy development and implementation, business model innovation '
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#51B1A2' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and '
                    para='Leadership, management essentials, strategy development and implementation, business model innovation '
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#51B1A2' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and '
                    para='Leadership, management essentials, strategy development and implementation, business model innovation '
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#A25B5D' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and '
                    para='Leadership, management essentials, strategy development and implementation, business model innovation '
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#A25B5D' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and '
                    para='Leadership, management essentials, strategy development and implementation, business model innovation '
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#A25B5D' />
            </div>
        </div>
    )
}

export default Events