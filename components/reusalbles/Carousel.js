import React from 'react'
import { useState } from 'react'


const elements = [
    <img src="/persons/banner.jpg" className='h-full w-full' alt="" />,
    <img src="/persons/brand_infocus.png" className='h-full w-full' alt="" />,
    <img src="/persons/banner2.jpg" className='h-full w-full' alt="" />,
]
const Carousel = () => {
    const [selected, setSelected] = useState(elements[0])

    return (
        <>
            {selected}
            <div className='flex gap-3 justify-center mt-10 '>
                {elements.map(el => {
                    return el === selected ?
                        <p className='h-2 w-4 bg-head_text cursor-pointer rounded-full' onClick={() => setSelected(el)} key={el}></p>
                        :
                        <p className='h-2 w-4 opacity-30 bg-head_text cursor-pointer rounded-full' onClick={() => setSelected(el)} key={el}></p>
                })}
            </div>
        </>
    )
}

export default Carousel