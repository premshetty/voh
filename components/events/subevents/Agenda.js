import React from 'react'

const Agenda = ({ bordercolor }) => {
    return (
        <div style={{ borderColor: bordercolor }} className='mt-10 border-[5px] border-[#F7F7F7] md:pr-[0px!important] p-3 md:p-10 grid grid-cols-5'>
            <div className='col-span-5 font-bold text-base ml-20'>
                Timing</div>
            <div style={{ borderColor: bordercolor }} className='border-r-[5px] border-[#F7F7F7] p-10 opacity-70'>
                9:00 AM to 10:00 AM
            </div>

            <div style={{ borderColor: bordercolor }} className='border-b-[3px] border-[#F7F7F7] col-span-4 p-10  font-bold text-base'>
                Registrations
            </div>
            <div style={{ borderColor: bordercolor }} className='border-r-[5px] border-[#F7F7F7] p-10 opacity-70'>
                10:00 AM to 10:15 AM
            </div>

            <div style={{ borderColor: bordercolor }} className=' border-b-[3px] border-[#F7F7F7] col-span-4 p-10  font-bold text-base'>
                Welcome Address
            </div>
            <div style={{ borderColor: bordercolor }} className='border-r-[5px] border-[#F7F7F7] p-10 opacity-70'>
                10:15 AM to 11:00 AM
            </div>
            <div style={{ borderColor: bordercolor }} className=' border-b-[3px] border-[#F7F7F7] col-span-4 p-10 flex flex-col gap-4 '>
                <p className='font-bold text-base'>Inaugural Session on Building back better: Reset to Sustainable & Resilient Recovery Post-Pandemic</p>
                <p className='text-[#707070]'> Discussion Points:</p>
                <p className='text-[#707070]'>As the health crisis due to the pandemic gradually abates, attention is now turning to implement stimulus measures to strengthen healthcare resilience post-pandemic. COVID-19 has highlighted not just the human suffering caused by the disease, but A veral key vulnerabilities as well as strengths in the life-sciences domain. In this panel, renowned healthcare thought leaders who have been the backbone of the industry during the pandemic will be deliberating on how they weathered the onslaught of the pandemic, strengthen the healthcare delivery infrastructure and next steps to build a better healthcare ecosystem.</p>
                <p className='text-[#707070]'>Speakers:</p>
                <ul className='flex flex-col gap-4 list-disc list-inside'>
                    <li className='text-[#707070]'> Prof. Dr. Rajesh S. Gokhale - Secretary, Department of Biotechnology, Government of India </li>
                    <li className='text-[#707070]'> Dr. Sangita Reddy - Joint Managing Director, Apollo Hospitals  </li>
                    <li className='text-[#707070]'> Dr. Harsh Mahajan - Founder, Mahajan Imaging  </li>
                    <li className='text-[#707070]'> Distinguished Professor K Srinath Reddy - Founder (Past) President, PHFI and Honorary Distinguished Professor of Public Health  </li>
                    <li className='text-[#707070]'> Upasana Arora - CEO & Director, Yashoda Superspeciality Hospital </li>
                </ul>
            </div>
            <div style={{ borderColor: bordercolor }} className='border-r-[5px] border-[#F7F7F7] p-10 opacity-70'>
                10:15 AM to 11:00 AM
            </div>
            <div style={{ borderColor: bordercolor }} className=' border-b-[3px] border-[#F7F7F7] col-span-4 p-10 flex flex-col gap-4 '>
                <p className='font-bold text-base'>Partner Presentation on Going digital with Adobe Doc Cloud to simplify the Healthcare process</p>
                <p className='text-[#707070]'> Speakers: Mohd Yaman - Solution Consultant - Digital Media, Adobe</p>
            </div>
            <div style={{ borderColor: bordercolor }} className='border-r-[5px] border-[#F7F7F7] p-10 opacity-70'>
                11:15 AM to 11:30 AM
            </div>
            <div style={{ borderColor: bordercolor }} className=' border-b-[3px] border-[#F7F7F7] col-span-4 p-10 flex flex-col gap-4 '>
                <p className='font-bold text-base'>Tea Break & Expo Visit</p>
            </div>
            <div style={{ borderColor: bordercolor }} className='border-r-[5px] border-[#F7F7F7] p-10 opacity-70'>
                11:30 AM to 12:00 PM
            </div>
            <div style={{ borderColor: bordercolor }} className=' border-b-[3px] border-[#F7F7F7] col-span-4 p-10 flex flex-col gap-4 '>
                <p className='font-bold text-base'>Partner Presentation on Adoption of Digital Health across the Continuum of Care; Clinicians, Hospitals, and Pharmaceuticals</p>
                <p className='text-[#707070]'> Speakers: Ruchi Tushir - VP & GM, Wolters Kluwer - Global Growth Market (GGM India)</p>
            </div>
            <div style={{ borderColor: bordercolor }} className='border-r-[5px] border-[#F7F7F7] p-10 opacity-70'>
                12:00 PM to 12:30 PM
            </div>
            <div style={{ borderColor: bordercolor }} className=' border-b-[3px] border-[#F7F7F7] col-span-4 p-10 flex flex-col gap-4 '>
                <p className='font-bold text-base'>Leader Power Talk on State Governments’ Strategy for Affordable and Inclusive Healthcare Ecosystem</p>
                <p className='text-[#707070]'> Speakers: Shri. T. S.Singh Deo, Hon’ble Minister of Health and Family Welfare, Government of Chhattisgarh</p>
                <p className='text-[#707070]'> Moderator: Vikas Dandekar - Editor, ETPrime (Health & Pharma)</p>
            </div>
            <div style={{ borderColor: bordercolor }} className='border-r-[5px] border-[#F7F7F7] p-10 opacity-70'>
                12:00 PM to 12:30 PM
            </div>
            <div style={{ borderColor: bordercolor }} className=' border-b-[3px] border-[#F7F7F7] col-span-4 p-10 flex flex-col gap-4 '>
                <p className='font-bold text-base'>Leader Power Talk on State Governments’ Strategy for Affordable and Inclusive Healthcare Ecosystem</p>
                <p className='text-[#707070]'> Speakers: Shri. T. S.Singh Deo, Hon’ble Minister of Health and Family Welfare, Government of Chhattisgarh</p>
                <p className='text-[#707070]'> Moderator: Vikas Dandekar - Editor, ETPrime (Health & Pharma)</p>
            </div>
            <div style={{ borderColor: bordercolor }} className='border-r-[5px] border-[#F7F7F7] p-10 opacity-70'>
                12:00 PM to 12:30 PM
            </div>
            <div style={{ borderColor: bordercolor }} className=' border-b-[3px] border-[#F7F7F7] col-span-4 p-10 flex flex-col gap-4 '>
                <p className='font-bold text-base'>Leader Power Talk on State Governments’ Strategy for Affordable and Inclusive Healthcare Ecosystem</p>
                <p className='text-[#707070]'> Speakers: Shri. T. S.Singh Deo, Hon’ble Minister of Health and Family Welfare, Government of Chhattisgarh</p>
                <p className='text-[#707070]'> Moderator: Vikas Dandekar - Editor, ETPrime (Health & Pharma)</p>
            </div>
            <div style={{ borderColor: bordercolor }} className='border-r-[5px] border-[#F7F7F7] p-10 opacity-70'>
                12:00 PM to 12:30 PM
            </div>
            <div style={{ borderColor: bordercolor }} className=' border-b-[3px] border-[#F7F7F7] col-span-4 p-10 flex flex-col gap-4 '>
                <p className='font-bold text-base'>Leader Power Talk on State Governments’ Strategy for Affordable and Inclusive Healthcare Ecosystem</p>
                <p className='text-[#707070]'> Speakers: Shri. T. S.Singh Deo, Hon’ble Minister of Health and Family Welfare, Government of Chhattisgarh</p>
                <p className='text-[#707070]'> Moderator: Vikas Dandekar - Editor, ETPrime (Health & Pharma)</p>
            </div>
            <div style={{ borderColor: bordercolor }} className='border-r-[5px] border-[#F7F7F7] p-10 opacity-70'>
                12:00 PM to 12:30 PM
            </div>
            <div style={{ borderColor: bordercolor }} className=' border-b-[3px] border-[#F7F7F7] col-span-4 p-10 flex flex-col gap-4 '>
                <p className='font-bold text-base'>Leader Power Talk on State Governments’ Strategy for Affordable and Inclusive Healthcare Ecosystem</p>
                <p className='text-[#707070]'> Speakers: Shri. T. S.Singh Deo, Hon’ble Minister of Health and Family Welfare, Government of Chhattisgarh</p>
                <p className='text-[#707070]'> Moderator: Vikas Dandekar - Editor, ETPrime (Health & Pharma)</p>
            </div>
            <div style={{ borderColor: bordercolor }} className='border-r-[5px] border-[#F7F7F7] p-10 opacity-70'>
                12:00 PM to 12:30 PM
            </div>
            <div className='col-span-4 p-10 flex flex-col gap-4 '>
                <p className='font-bold text-base'>Leader Power Talk on State Governments’ Strategy for Affordable and Inclusive Healthcare Ecosystem</p>
                <p className='text-[#707070]'> Speakers: Shri. T. S.Singh Deo, Hon’ble Minister of Health and Family Welfare, Government of Chhattisgarh</p>
                <p className='text-[#707070]'> Moderator: Vikas Dandekar - Editor, ETPrime (Health & Pharma)</p>
            </div>
        </div>
    )
}

export default Agenda