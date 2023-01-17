import React from 'react'
import classes from '../../../editorials/editorial.module.css'
const Card = ({ img, name, dep, date, btnclr }) => {
    return (
        <div className='w-full h-auto pb-6  border-b-[1px] border-[#707070] border-opacity-40 flex flex-col gap-3'>
            <img src={img} className='w-full' alt="" />
            <h2 className='font-semibold text-[black] text-base md:text-lg'>{name}</h2>
            <div className='flex justify-between  items-center'>
                <p className='text-[#606060] text-xs md:text-sm'>{dep}</p>
                <p className='text-[#606060] text-xs'>{date}</p>
            </div>
            <button style={{ backgroundColor: btnclr }} className={` text-xs md:text-sm px-2 h-5 w-[120px] md:px-5 md:h-8 text-white rounded-[5px]`}>Idea Leader</button>

        </div>
    )
}
const Trending = () => {
    return (
        <div className={`${classes.trendingnow} h-[1100px] p-4 w-full  mt-20 md:mt-0`}>
            <h1 className='text-[black] font-bold text-2xl'>Trending Now</h1>
            <div className={` ${classes.cardContainer} mt-8 flex flex-col gap-2 overflow-scroll h-[1020px]`} >
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