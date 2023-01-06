import React from 'react'

const IdeaLeader = () => {
    const images = ["/persons/banner.jpg", "/persons/banner.jpg", "/persons/banner.jpg", "/persons/banner.jpg"]
    return (
        <div className='px-10 w-full mt-10'>
            <div className='flex justify-between items-center border-b-[5px] pb-2 border-[#5F9DC1]'>
                <h2 className='font-bold text-xl'>Idea Leader</h2>
            </div>
            <img className='mt-10' src="/persons/banner.jpg" alt="" />
        </div>
    )
}

export default IdeaLeader