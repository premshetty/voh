import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const elements = [
    <img src="/persons/banner.jpg" className='h-full w-full' alt="" />,
    <img src="/persons/brand_infocus.png" className='h-full w-full' alt="" />,
    <img src="/persons/banner2.jpg" className='h-full w-full' alt="" />,
]
let initial = 0;
const Carousel = () => {
    const [selected, setSelected] = useState(elements[initial])
    useEffect(() => {
        const interval = setInterval(() => {
            if (initial === 2) {
                initial = -1
            } else {
                initial++
                setSelected(elements[initial])
            }
        }, 2000);
        return () => {
            clearInterval(interval)
        }
    }, [selected])


    return (
        <>
            {selected}
            <div className='flex gap-3 justify-center mt-10 '>
                {elements.map((el, index) => {
                    return el === selected ?
                        <p className='h-2 w-4 bg-head_text cursor-pointer rounded-full' onClick={() => {
                            setSelected(el)
                            initial = index
                        }} key={el}></p>
                        :
                        <p className='h-2 w-4 opacity-30 bg-head_text cursor-pointer rounded-full' onClick={() => setSelected(el)} key={el}></p>
                })}
            </div>
        </>
    )
}

export default Carousel