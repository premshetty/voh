import classes from '../editorials/editorial.module.css'
export const Card1 = () => {
    return (
        <div className={`${classes.IdeaLeaderCard2} h-[430px] w-[430px] p-5`}>
            <img className='h-[150px] w-full object-cover' src="/persons/banner2.jpg" alt="" />
            <div className=' flex flex-col gap-4 mt-5'>
                <h2 className='font-bold text-xl'>Sexual Health: Under Rated</h2>
                <div className='w-full flex justify-between'>
                    <p className='font-bold text-[#272727]'>By Rajavarman Kittu</p>
                    <p className='text-[#606060] text-sm'>01 Nov, 2022</p>
                </div>
                <p className=''>The self -hygiene is one of the important of healthy habits which is very less thought. Of course, the doctors </p>

            </div>
        </div>
    )
}
export const Card2 = () => {
    return (
        <div className={`${classes.IdeaLeaderCard2} h-[780px] w-[550px] py-14 px-5`}>
            <img src="/persons/banner2.jpg" alt="" />
            <div className=' flex flex-col gap-6 items-center mt-5'>
                <h2 className='font-bold text-xl'>Sexual Health: Under Rated</h2>
                <p className='text-center'>The self -hygiene is one of the important of healthy habits which is very less thought. Of course, the doctors are constantly making points to the patients about self-hygiene as many of infectious conditions can be easily avoided if they follow the regular guidance of self-cleanliness.</p>
                <p className='font-bold text-[#272727]'>By Rajavarman Kittu</p>
                <p className='text-[#606060] text-sm'>01 Nov, 2022</p>
                <button className='h-10 w-32 bg-button_cta font-bold text-white'>Read more</button>
            </div>
        </div>
    )
}
export const Card3 = () => {
    return (
        <div className={`${classes.IdeaLeaderCard2} h-[250px] w-[350px] p-5`}>
            <div className=' flex flex-col gap-4 mt-5'>
                <h2 className='font-bold text-xl'>Sexual Health: Under Rated</h2>
                <div className='w-full flex justify-between'>
                    <p className='font-bold text-[#272727]'>By Rajavarman Kittu</p>
                    <p className='text-[#606060] text-sm'>01 Nov, 2022</p>
                </div>
                <p className=''>The self -hygiene is one of the important of healthy habits which is very less thought. Of course, the doctors </p>

            </div>
        </div>
    )
}
export const Card4 = () => {
    return (
        <div className={`${classes.IdeaLeaderCard2} h-[350px] flex w-[750px] p-5`}>
            <div className='px-5 flex flex-col gap-4 mt-3'>
                <h2 className='font-bold text-xl'>Sexual Health: Under</h2>
                <p className='text-base'>The self -hygiene is one of the important of healthy habits which is very less thought. Of course, the doctors are constantly making points to the patients about self-hygiene as many of infectious conditions can be easily avoided if they follow the regular guidance of self-cleanliness.</p>
                <div className='w-full flex justify-between'>
                    <p className='font-bold text-[#272727]'>By Rajavarman Kittu</p>
                    <p className='text-[#606060] text-sm'>01 Nov, 2022</p>
                </div>
                <button className='h-10 w-32 bg-button_cta font-bold text-white'>Read more</button>
            </div>
            <img className='h-[280px] w-[256px] object-cover mt-3' src="/persons/rajavarman.png" alt="" />
        </div>
    )
}