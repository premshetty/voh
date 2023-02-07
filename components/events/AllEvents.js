import Link from 'next/link'
import React from 'react'
import classes from '../editorials/editorial.module.css'
export const Nav = () => {
    return (
        <div className={`${classes.shadow} ${classes.navcontainer} pl-5   overflow-x-scroll md:flex gap-8 text-sm z-20 h-10 hidden md:fixed top-[63px] w-full bg-white shadow-2xl mt-[1px] justify-start md:justify-center items-center`}>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/events'> All Events</a>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/events#publichealthawarness'> Public Health Awarness</a>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/events#brandsolution'>Brand Solutions</a>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/events#flagshipevent'> FlagShip Events</a>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/events/1'> Event 1</a>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/events/2'> Event 2</a>
            <a className='whitespace-nowrap text-xs md:text-sm' href='/events/3'> Event 3</a>
        </div>
    )
}
export const MainCard = ({ img, date, addon }) => <div className={` ${classes.IdeaLeaderCard2} flex flex-col gap-2 border border-[#00000028] pb-3`}>
    <img src={img} className='h-[600px] w-full object-cover' alt="" />
    <div className='w-full items-center py-2 flex justify-between px-3'>
        <p className='font-bold text-lg'>{date}</p>
        <div className='flex items-center gap-2'>
            {addon ? <img src="/icons/sharewhite.svg" className='h-8 w-8 rounded-full p-2 mr-4 mt-1 bg-footer_color' alt="" /> : <>
                <p className='font-bold text-lg'>View details</p>
                <img className='h-4' src="/icons/right.svg" alt="" />
            </>
            }
        </div>
    </div>
</div>
export const PublicAwarnessCard = () => {
    return (
        <div className={`${classes.IdeaLeaderCard2} w-full flex flex-col md:w-[400px] min-h-[500px] md:min-h-[450px]  relative border-[4px] border-[#489FC5!important]`}>
            <p className='h-[150px]  pl-4 pt-4 w-1/2 text-[#489FC5] text-[40px] font-bold font-sans'>
                28 Jan <br /> <span>2 0 2 3</span>

            </p>
            <div className='flex-grow flex flex-col gap-6 bg-[#489FC5] p-4'>
                <p className='text-white font-bold text-2xl fomnt-sans'>Healthcare Leadership and Management Days</p>
                <p className='text-base text-white font-proxima'>Leadership, management essentials, strategy development and implementation, business model innovation and moving from financial numbers to </p>
            </div>
            <button className='border hover:bg-[white!important] hover:text-[#489FC5] border-white rounded-2xl h-10 bottom-10 left-5 text-white w-[150px] absolute px-4'>View Details</button>

            <img src="/icons/arrow.svg" className='h-5 absolute flex gap-3 bottom-8 right-5' alt="" />
            <div className='flex gap-3 absolute top-[100px] bg-[#489FC5] rounded-full p-2 right-4'>
                <img src="/icons/sharewhite.svg" className='h-5' alt="" />
            </div>
            <button className='bg-[#489FC5] '></button>
        </div>
    )
}
export const BrandSolutionCard = () => {
    return (
        <div className={`${classes.IdeaLeaderCard2} w-full flex flex-col md:w-[400px] min-h-[580px] md:min-h-[530px] relative border-[4px] `}>
            <img src="/brandsolution_card.png" className='h-[230px] w-full object-cover' alt="" />
            <div className='flex-grow flex flex-col gap-6 bg-white p-4'>
                <p className=' font-bold text-2xl font-sans'>Healthcare Leadership and Management Days</p>
                <p className='text-base font-proxima'>Leadership, management essentials, strategy development and implementation, business model innovation and moving from financial numbers to </p>
            </div>
            <button className='border hover:bg-button_cta hover:text-white border-[#A84266] rounded-2xl h-10 bottom-6 left-5 text-[#A84266] w-[150px] absolute px-4'>View Details</button>
            <p className=' absolute bottom-6 right-5  pl-4 pt-4  text-[#489FC5] text-[20px] font-bold'>
                28 Jan <br /> <span>2 0 2 3</span> </p>
            <div className='w-[230px] md:w-[300px] bg-[#05B4A2] top-[180px] left-0 items-center absolute rounded-r-full flex justify-between px-5 h-10'>
                <img src="/icons/arrow.svg" className='h-5  flex gap-3 ' alt="" />
                <p className='text-white text-base'>Upcoming</p>
            </div>
            <div className='flex gap-3 absolute top-[184px] bg-[#05B4A2] rounded-full p-2 right-4'>
                <img src="/icons/sharewhite.svg" className='h-5' alt="" />
            </div>

        </div>
    )
}
export const FlagshipEventCard = () => {
    return (
        <div className={`${classes.IdeaLeaderCard2} w-full flex flex-col md:w-[400px] min-h-[500px] relative border-[4px] `}>
            <div className='relative  h-[200px] w-full  object-cover' alt="" >
                <div className='absolute top-0 h-[200px] bg-[#00000096]  w-full '>
                </div>
                <img className='absolute top-0 h-[200px] -z-20  w-full object-cover' src="/flagshipevent_card.png" alt="" />
            </div>
            <div className='flex-grow flex flex-col gap-6 bg-white p-4'>
                <p className=' font-bold text-2xl font-sans'>Healthcare Leadership and Management Days</p>
                <p className='text-base font-proxima'>Leadership, management essentials, strategy development and implementation, business model innovation and moving from financial numbers to </p>
            </div>
            <button className='border border-[#A84266] hover:bg-button_cta hover:text-white rounded-2xl h-10 bottom-10 left-5 text-[#A84266] w-[150px] absolute px-4'>View Details</button>

            <img src="/icons/arrow.svg" className='h-5 absolute flex gap-3 top-[170px] left-5' alt="" />
            <div className='flex gap-3 absolute top-[150px] bg-[#AD565B] rounded-full p-2 right-4'>
                <img src="/icons/sharewhite.svg" className='h-5' alt="" />
            </div>
            <p className=' absolute bottom-6 right-5  pl-4 pt-4  text-[#AD565B] text-[20px] font-bold'>
                28 Jan <br /> <span>2 0 2 3</span> </p>
        </div>
    )
}
const AllEvents = () => {
    return (
        <div className='px-3 md:px-10 '>
            <MainCard img="/event_banner.png" date='October 19 , 2022' addon={false} />
            <div id='publichealthawarness' className=' w-full mt-10'>
                <Link href='/events/publichealthawarness'>
                    <div className='flex justify-between items-center border-b-[3px] pb-2 border-[#5F9DC1]'>
                        <h2 className='font-bold text-xl font-sans pl-5'>Public Health Awareness</h2>
                        <img src="/icons/right.svg" className='h-4' alt="" />
                    </div>
                </Link>
            </div>
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3'>
                <PublicAwarnessCard />
                <PublicAwarnessCard />
                <PublicAwarnessCard />

            </div>
            <div id='brandsolution' className=' w-full mt-10'>
                <Link href='/events/brandsolution'>
                    <div className='flex justify-between items-center border-b-[3px] pb-2 border-[#51B1A2]'>
                        <h2 className='font-bold text-xl font-sans  pl-5'>Brand Solution</h2>
                        <img src="/icons/right.svg" className='h-4' alt="" />
                    </div>
                </Link>
            </div>
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3'>
                <BrandSolutionCard />
                <BrandSolutionCard />
                <BrandSolutionCard />

            </div>
            <div id='flagshipevent' className=' w-full mt-10'>
                <Link href='/events/flagshipevents'>
                    <div className='flex justify-between items-center border-b-[3px] pb-2 border-[#A25B5D]'>
                        <h2 className='font-bold text-xl font-sans pl-5'>FlagShip Events</h2>
                        <img src="/icons/right.svg" className='h-4' alt="" />
                    </div>
                </Link>
            </div>
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3'>
                <FlagshipEventCard />
                <FlagshipEventCard />
                <FlagshipEventCard />

            </div>
        </div>
    )
}

export default AllEvents