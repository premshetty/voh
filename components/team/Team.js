import Link from 'next/link'
import React from 'react'
import { MainCard } from '../events/AllEvents'
import classes from '../editorials/editorial.module.css'

const Card = ({ image, name, department, link }) => {
    return <Link href={link}>
        <div className={`${classes.IdeaLeaderCard2} h-[500px] flex flex-col gap-6  justify-center items-center w-full md:w-[350px] px-10 py-5`}>
            <img className='w-[200px] h-[200px] object-cover' src={image} alt="" />
            <h2 className='text-2xl font-bold font-sans'>{name}</h2>
            <p className='text-lg font-bold font-sans text-center'>{department}</p>
            <p className='text-sm  font-proxima opacity-60'>Voice of Healthcare</p>
            <button className='h-10 w-32 border-[2px] hover:bg-button_cta hover:text-white border-[#A84266] text-[#A84266]'>Connect</button>
        </div>
    </Link>
}
const Team = () => {
    return (
        <>
            <MainCard img="/event_banner.png" date='October 19 , 2022' addon={false} />
            <div id='idealeader' className=' w-full mt-10'>

                <div className='flex justify-between items-center border-b-[3px] pb-2 border-[#5F9DC1]'>
                    <h2 className='font-bold text-xl font-sans pl-5'>Meet Team</h2>
                    <img src="/icons/right.svg" className='h-4' alt="" />
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 justify-center'>
                <div className='md:block hidden'></div>
                <Card link="https://www.linkedin.com/in/pinky-chahar-b1390b108/" image="/persons/pinky_chahar.png" name="Pinky Chahar" department="Deputy Director" className='col-span-3' />
                <div className='md:block hidden'></div>
                <Card link="https://www.linkedin.com/in/khushbu-sharma-15472a12b/" image="/persons/khusbhu.png" name="Khushbu Sharma" department="Assistant Director" />
                <Card link="https://www.linkedin.com/in/growwithjay/ " image="/persons/jayjith.png" name="Jayjit Das Gupta" department="Branding & Content Associate" />
                <Card link="https://www.linkedin.com/in/abhay-saxena-381697188/" image="/persons/abhay.png" name="Abhay Saxena" department="EIR Strategy" />
                <Card link="https://www.linkedin.com/in/dr-ritika-dhiman-534b9980/ " image="/persons/ritika.png" name="Dr. Ritika Dhiman" department="Senior Manager Collaborations" />
                <Card link="https://www.linkedin.com/in/katyayni-sinha-a32824169/ " image="/persons/katyayni.png" name="Katyayni Sinha" department="Assistant DM Manager" />
                <Card link="https://www.linkedin.com/in/harshita-shukla-005959219/" image="/persons/harshitha.png" name="Harshita Shukla" department="Assistant Growth Manager" />
                <Card link="https://www.linkedin.com/in/amit-gopalan-262327132/ " image="/persons/amit.png" name="Amit Gopalan" department="Creative Designer" />
                <Card link="https://www.linkedin.com/in/kunal-rawat-56040b221/ " image="/persons/kunal.png" name="Kunal Rawat" department="Junior Graphic Designer" />
                <Card link="https://www.linkedin.com/in/sandeshchahar " image="/persons/sandesh.png" name="Sandesh Chahar" department="DM Manager" />

            </div>
        </>
    )
}

export default Team