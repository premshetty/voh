import React from 'react'
import { Nav } from '../editorials/Editorials'
import BrandsFeatured from './BrandsFeatured'
import Recent from './Recent'

const BrandInFocus = () => {
    return (
        <div className=''>
            <Nav />
            <div className=' w-full mt-32 px-10'>
                <div className='flex justify-between items-center border-b-[5px] pb-2 border-[#51B1A2]'>
                    <h2 className='font-bold text-xl'>Brand In Focus</h2>
                </div>
                <div className='flex w-full justify-between h-[100vh] mt-10'>
                    <div className='w-[30%] h-full flex justify-center items-center border '>ADVERTISMENT</div>
                    <div className='w-[68%] h-full flex flex-col  justify-between items-center'>
                        <img className='w-full' src="/persons/brand_infocus.png" alt="" />
                        <p className='text-[16px] text-[#2C2A2A] text-center'>Cloudphysician is adding the touch of cloud-tech to augment care and amplify access. Cloudphysician is adding the touch of cloud-tech to augment care and amplify access. Cloudphysician is adding the touch of cloud-tech to augment care and amplify access. Cloudphysician is adding the touch of cloud-tech to augment care and amplify access.</p>
                        <p className='text-[#606060] text-sm'>01 Nov, 2022</p>
                        <button className='h-10 w-32 bg-button_cta font-bold text-white'>Read more</button>
                    </div>
                </div>
                <Recent />
                <BrandsFeatured />
            </div>
        </div>
    )
}

export default BrandInFocus