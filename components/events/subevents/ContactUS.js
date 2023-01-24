import React from 'react'

export const ContactUS2 = () => {
    return (
        <>
            <div className='mt-10 h-[400px] w-full flex flex-col gap-6 p-10 justify-center items-center' style={{ backgroundImage: `url('/attendeventbg.png')` }}>
                <p className='text-5xl text-white font-[500]'>Interested to attend event</p>
                <button className='h-12 px-5 text-white hover:text-button_cta font-[500] bg-button_cta hover:bg-white'>
                    Register Now
                </button>
            </div>
            <div className='mt-20 flex relative'>
                <div className='h-2 bg-[#AD565B] w-full '>

                </div>
                <div className='h-12 top-[-20px] absolute w-[50%] bg-[#AD565B] px-10 py-2 '>
                    <p className='text-white text-2xl font-[500]'>Contact Us</p>
                </div>
            </div>
            <div className='flex flex-col gap-10 md:flex-row md:gap-0 justify-center items-center mx-auto w-[80%] p-10'>
                <div className='border-r-[5px] border-[#F7F7F7] flex flex-col gap-6 p-10'>
                    <p className='text-lg font-bold'>For general enquiry</p>
                    <p className='text-lg text-[#707070]'>VoH Team</p>
                    <p className='text-lg text-[#AD565B]'>eventteam@voh.in</p>
                </div>
                <div className='border-r-[5px] border-[#F7F7F7] flex flex-col gap-6 p-10'>
                    <p className='text-lg font-bold'>For general enquiry</p>
                    <p className='text-lg text-[#707070]'>VoH Team</p>
                    <p className='text-lg text-[#AD565B]'>eventteam@voh.in</p>
                </div>
                <div className='border-r-[5px] border-[#F7F7F7] flex flex-col gap-6 p-10'>
                    <p className='text-lg font-bold'>For general enquiry</p>
                    <p className='text-lg text-[#707070]'>VoH Team</p>
                    <p className='text-lg text-[#AD565B]'>eventteam@voh.in</p>
                </div>
            </div></>
    )
}

const ContactUS = () => {
    return (
        <>
            <div className='mt-10 h-[400px] w-full flex flex-col gap-6 p-10 justify-center items-center' style={{ backgroundImage: `url('/attendeventbg.png')` }}>
                <p className='text-5xl text-white font-[500]'>Interested to attend event</p>
                <button className='h-12 px-5 text-white hover:text-button_cta font-[500] bg-button_cta hover:bg-white'>
                    Register Now
                </button>
            </div>
            <div className='flex justify-center items-center relative mx-auto mt-20 w-[300px]'>
                <p className='text-[#489FC5] text-2xl font-bold'>
                    <span className=' font-bold top-[-10px] left-12 -z-10 text-[120px]  absolute text-[#C9EFFF]'>C</span>
                    Contact Us</p>
            </div>
            <div className='flex justify-center flex-col md:flex-row gap-10 md:gap-0 items-center mx-auto w-[80%] p-10'>
                <div className='border-r-[5px] border-[#F7F7F7] flex flex-col gap-6 p-10'>
                    <p className='text-lg font-bold'>For general enquiry</p>
                    <p className='text-lg text-[#707070]'>VoH Team</p>
                    <p className='text-lg text-[#489FC5]'>eventteam@voh.in</p>
                </div>
                <div className='border-r-[5px] border-[#F7F7F7] flex flex-col gap-6 p-10'>
                    <p className='text-lg font-bold'>For general enquiry</p>
                    <p className='text-lg text-[#707070]'>VoH Team</p>
                    <p className='text-lg text-[#489FC5]'>eventteam@voh.in</p>
                </div>
                <div className='border-r-[5px] border-[#F7F7F7] flex flex-col gap-6 p-10'>
                    <p className='text-lg font-bold'>For general enquiry</p>
                    <p className='text-lg text-[#707070]'>VoH Team</p>
                    <p className='text-lg text-[#489FC5]'>eventteam@voh.in</p>
                </div>
            </div></>
    )
}

export default ContactUS