import React, { useState } from 'react'

const CarouselWithimagePreview = () => {
    let initial = 0;
    const images = ["/persons/banner.jpg", "/persons/banner.jpg", "/persons/banner.jpg", "/persons/banner.jpg", "/persons/banner.jpg", "/persons/banner.jpg", "/persons/banner.jpg"]
    const [currentimage, setCurrentImage] = useState(images[initial])

    const increaseHandler = () => {
        if (initial < images.length - 1) {
            images.unshift(initial)
            images.push(images[0])
            initial++
            setCurrentImage(images[initial])
        }

    }
    const decreaseHandler = () => {
        if (initial >= 1) {
            initial--
            setCurrentImage(images[initial])
        }
    }
    return (
        <div>
            <img className='mt-10' src={currentimage} alt="" />
            <div className='relative w-full'>

                <div className='flex gap-4 justify-start  max-w-full overflow-hidden items-baseline mt-10'>
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