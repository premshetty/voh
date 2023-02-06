import React from 'react'

const SpeakerCard = () => {
    return (
        <div className='w-full gap-4 md:w-[300px] group flex flex-col justify-center items-center'>
            <img className='h-[200px]  transform   group-hover:scale-110 transition duration-500 ' src="/persons/speaker.png" alt="" />
            <h2 className='text-[#489FC5] font-[500] text-2xl font-sans'>GUEST OF HONOUR</h2>
            <h4 className='text-base font-bold font-sans'>Sri Dr. Jatindera Singh</h4>
            <p className='text-center opacity-70 font-proxima'>Union Minister of State, Prime Minister’s Office, Minister of State for the Ministry of science and Technology & Ministry of State (MoS) Ministry of Earth Science Government of India</p>
        </div>
    )
}

export default SpeakerCard