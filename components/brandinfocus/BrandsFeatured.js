import React, { useState } from 'react'
import classes from '../editorials/editorial.module.css'
const BrandsFeatured = () => {
    const [scrollx, setscrollX] = useState(0)


    const brands = [
        "/persons/featured_brand.png",
        "/persons/brand_infocus.png",
        "/persons/featured_brand.png",
        "/persons/featured_brand.png",
        "/persons/featured_brand.png",
        "/persons/featured_brand.png",
        "/persons/featured_brand.png",
        "/persons/featured_brand.png",
        "/persons/featured_brand.png",
        "/persons/featured_brand.png",
    ]


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
        <div className='mt-10  mb-20'>
            <h2 className='font-bold text-xl'>Brands Featureds</h2>
            <div className={` mt-10 h-[150px]  relative`}>
                <img className='absolute z-10 top-[48%] left-0  cursor-pointer' onClick={decreaseHandler} src="/icons/icon_left.svg" alt="" />
                <img className='absolute top-[48%] right-0 cursor-pointer' onClick={increaseHandler} src="/icons/icon_right.svg" alt="" />
                <div id='Brandcontainer' className={`${classes.cardContainer} flex gap-20 items-center my-10 mr-4  overflow-x-scroll px-10`}>
                    {brands.map(brand => <img key={brand} className='h-[150px]' src={brand} alt="" />)}
                </div>
            </div>
        </div>
    )
}

export default BrandsFeatured