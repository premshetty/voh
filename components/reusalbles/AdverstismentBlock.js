import React from 'react'

const AdverstismentBlock = ({ height, width }) => {
    return (
        <div className='flex justify-center items-center border font-bold text-lg border-[#707070]' style={{
            height: height,
            width: width
        }}>Advertisment</div>
    )
}

export default AdverstismentBlock