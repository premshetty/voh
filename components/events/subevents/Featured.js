import React from 'react'
import classes from '../../editorials/editorial.module.css'
const Featured = ({ color, bg, smcolor }) => {
    return (

        <div style={bg ? { backgroundColor: bg } : { backgroundColor: '' }} className={`${classes.IdeaLeaderCard} hover:-ml-10  hover:w-[98.3vw] w-full md:w-[95vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 align-middle justify-center m-auto   mt-20 py-10`}  >
            <div className='flex flex-col items-center justify-center gap-6 border-r-[3px] border-[#F7F7F7]'>
                <p style={{ color: color }} className='text-2xl font-bold text-[#489FC5]'>8+</p>
                <p style={{ color: smcolor }}>Hours of Networking</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 border-r-[3px] border-[#F7F7F7]'>
                <p style={{ color: color }} className='text-2xl font-bold text-[#489FC5]'>5+</p>
                <p style={{ color: smcolor }}>Knowledge Sessions</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 border-r-[3px] border-[#F7F7F7]'>
                <p style={{ color: color }} className='text-2xl font-bold text-[#489FC5]'>25+</p>
                <p style={{ color: smcolor }}>Speakers</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-6  border-[#F7F7F7]'>
                <p style={{ color: color }} className='text-2xl font-bold text-[#489FC5]'>200+</p>
                <p style={{ color: smcolor }}>Delegates</p>
            </div>
        </div>


    )
}

export default Featured