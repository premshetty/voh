import React from 'react'
import classes from '../../../editorials/editorial.module.css'
const Card = ({ img, name, para, date, btnclr }) => {
    return (
        <div className=' border-b-[1px] border-[#707070] border-opacity-40 py-5'>

            <div className='w-full   relative flex'>
                <button className='h-4 rounded-r-full w-auto pl-1 text-[8px] pr-3 bg-[#AD565B] absolute text-white'>Upcoming </button>
                <div className='min-w-[80px] max-h-[80px] bg-[#489FC5] font-sans flex justify-center items-center text-white font-bold text-lg text-center'>28 Jan 2023</div>
                <h2 className='ml-2 font-semibold whitespace-pre-wrap text-[black] text-base md:text-[16px]] font-proxima'>{name}</h2>
            </div>
            <div className='flex justify-between w-full items-center mt-1'>
                <p className='text-[#7C7C7C] text-xs flex gap-1 items-center font-proxima'><img className='h-5' src="/icons/location.svg" alt="" />Mumbai</p>
                <button className={`font-proxima border whitespace-nowrap border-[#A84266] hover:bg-button_cta hover:text-white text-xs md:text-sm px-2 h-5 md:px-5 md:h-8 text-[#A84266] rounded-[15px]`}>Register Now</button>
            </div>
        </div>
    )
}
const Events = () => {
    return (
        <div className={`${classes.trendingnow} p-4 w-full min-h-[850px] `}>
            <h1 className='text-[black] font-bold text-2xl font-sans'>Events</h1>
            <div className={` ${classes.cardContainer} mt-8 flex flex-col gap-2 overflow-scroll h-[780px]`} >
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and Management Days '
                    para='Leadership, management essentials,'
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#5F9DC1' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and Management Days '
                    para='Leadership, management essentials,'
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#5F9DC1' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and Management Days '
                    para='Leadership, management essentials,'
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#5F9DC1' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and Management Days '
                    para='Leadership, management essentials,'
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#51B1A2' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and Management Days '
                    para='Leadership, management essentials,'
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#51B1A2' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and Management Days '
                    para='Leadership, management essentials,'
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#51B1A2' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and Management Days '
                    para='Leadership, management essentials,'
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#A25B5D' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and Management Days '
                    para='Leadership, management essentials,'
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#A25B5D' />
                <Card img='/persons/visaka.png'
                    name='Healthcare Leadership and Management Days '
                    para='Leadership, management essentials,'
                    dep='Clinicspots' date='01 Nov, 2022' btnclr='#A25B5D' />
            </div>
        </div>
    )
}

export default Events