import React, { useState } from 'react'
import classes from './carousel.module.css'
const CarouselWithimagePreview = () => {
    let initial = 0;
    const images = ["/persons/banner.jpg", "/persons/banner2.jpg", "/persons/banner.jpg", "/persons/banner.jpg", "/persons/banner.jpg", "/persons/banner.jpg", "/persons/banner.jpg"]
    const [currentimage, setcurrentimage] = useState(images[initial])
    const [scrollx, setscrollX] = useState(0)

    const decreaseHandler = () => {
        if (scrollx >= 230) {
            document.getElementById('Brandcontainer').scrollLeft = scrollx - 230
            setscrollX(scrollx - 230)

        }
    }
    const increaseHandler = () => {
        const lenght = images.length * 230;
        document.getElementById('Brandcontainer').scrollLeft = scrollx + 230
        setscrollX(scrollx + 230)


    }
    return (
        <div>
            <img className='mt-10' src={currentimage} alt="" />
            <div className='relative w-full'>

                <div id='Brandcontainer' className={`flex gap-4 justify-start  max-w-full overflow-scroll items-baseline mt-10 ${classes.carouselcontainer}`}>
                    <img className='absolute z-10 top-[50%] left-[-20px]  cursor-pointer' onClick={decreaseHandler} src="/icons/icon_left.svg" alt="" />
                    <img className='absolute top-[50%] right-[-20px] cursor-pointer' onClick={increaseHandler} src="/icons/icon_right.svg" alt="" />
                    {images.map(src => {
                        return <img className='h-[190px] w-auto' src={src} alt="" />
                    })}
                </div>
            </div>
        </div>
    )
}

export default CarouselWithimagePreview