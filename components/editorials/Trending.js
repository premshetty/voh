import React from 'react'
import classes from './editorial.module.css'
const Card = ({ img, name, dep, date, btnclr }) => {
    return (
        <div className='w-full min-h-[7rem]  border-b-[1px] border-[#707070] border-opacity-40 flex'>
            <img src={img} className='h-[50px] md:h-[90px]' alt="" />
            <div className='flex flex-col justify-around ml-5 h-[70px] md:h-[100px]'>
                <h2 className='font-semibold text-[black] text-base md:text-lg'>{name}</h2>
                <p className='text-[#606060] text-xs md:text-sm'>{dep}</p>
                <div className='flex justify-between w-[130%] items-center'>
                    <button style={{ backgroundColor: btnclr }} className={` text-xs md:text-sm px-2 h-5 md:px-5 md:h-8 text-white rounded-[5px]`}>Idea Leader</button>
                    <p className='text-[#606060] text-xs'>{date}</p>
                </div>
            </div>
        </div>
    )
}
const Trending = () => {
    return (
        <div className={`${classes.trendingnow} p-4 w-full md:w-[32%] mt-20 md:mt-0`}>
            <h1 className='text-[black] font-bold text-2xl'>Trending Now</h1>
            <div className={` ${classes.cardContainer} mt-8 flex flex-col gap-2 overflow-scroll h-[400px]`} >
                <Card img='/persons/visaka.png' name='Vishaka Goyal' dep='Clinicspots' date='01 Nov, 2022' btnclr='#5F9DC1' />
                <Card img='/persons/visaka.png' name='Vishaka Goyal' dep='Clinicspots' date='01 Nov, 2022' btnclr='#5F9DC1' />
                <Card img='/persons/visaka.png' name='Vishaka Goyal' dep='Clinicspots' date='01 Nov, 2022' btnclr='#5F9DC1' />
                <Card img='/persons/visaka.png' name='Vishaka Goyal' dep='Clinicspots' date='01 Nov, 2022' btnclr='#51B1A2' />
                <Card img='/persons/visaka.png' name='Vishaka Goyal' dep='Clinicspots' date='01 Nov, 2022' btnclr='#51B1A2' />
                <Card img='/persons/visaka.png' name='Vishaka Goyal' dep='Clinicspots' date='01 Nov, 2022' btnclr='#51B1A2' />
                <Card img='/persons/visaka.png' name='Vishaka Goyal' dep='Clinicspots' date='01 Nov, 2022' btnclr='#A25B5D' />
                <Card img='/persons/visaka.png' name='Vishaka Goyal' dep='Clinicspots' date='01 Nov, 2022' btnclr='#A25B5D' />
                <Card img='/persons/visaka.png' name='Vishaka Goyal' dep='Clinicspots' date='01 Nov, 2022' btnclr='#A25B5D' />
            </div>
        </div>
    )
}

export default Trending