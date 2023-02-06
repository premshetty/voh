import React, { useState } from 'react'
import classes from '../reusalbles/carousel.module.css'

const ImageSlider = () => {
    let initial = 0;
    const images = ["/persons/home_img1.png", "/persons/home_img2.png", "/persons/home_img3.png", "/persons/home_img4.png", "/persons/home_img1.png", "/persons/home_img2.png", "/persons/home_img3.png"]
    const [currentimage, setcurrentimage] = useState(images[initial])
    const [scrollx, setscrollX] = useState(0)

    const decreaseHandler = () => {
        if (scrollx >= 230) {
            document.getElementById('Brandcontainer').scrollLeft = scrollx - 230
            setscrollX(scrollx - 230)

        }
    }
    const increaseHandler = () => {
        document.getElementById('Brandcontainer').scrollLeft = scrollx + 230
        setscrollX(scrollx + 230)
    }
    return (
        <div className='relative w-full mt-20'>
            <div id='Brandcontainer' className={`flex gap-8 justify-start  max-w-full overflow-scroll items-baseline mt-10 ${classes.carouselcontainer}`}>
                <img className='absolute z-10 top-[50%] left-[-20px]  cursor-pointer' onClick={decreaseHandler} src="/icons/icon_left.svg" alt="" />
                <img className='absolute top-[50%] right-[-20px] cursor-pointer' onClick={increaseHandler} src="/icons/icon_right.svg" alt="" />
                {images.map(src => {
                    return <img className='h-[330px] w-auto' src={src} alt="" />
                })}
            </div>
        </div>

    )
}

export default ImageSlider