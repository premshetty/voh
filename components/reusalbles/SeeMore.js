import React from 'react'

const SeeMore = ({ bg }) => {
    return (
        <div className='flex items-center w-full gap-4 mt-10 justify-center'>
            <div style={{ backgroundColor: bg }} className='h-1  flex-grow'></div>
            <button style={{ backgroundColor: bg }} className='h-10 w-36  font-bold text-white'>View more</button>
            <div style={{ backgroundColor: bg }} className='h-1   flex-grow'></div>
        </div>
    )
}

export default SeeMore