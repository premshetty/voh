import '../styles/globals.css'
import Navrbar2 from '../components/home/Navrbar2'
import Footer from '../components/home/Footer'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {
  const [child, setChild] = useState('')
  const router = useRouter()

  const editorials = <div className='min-h-[200px] col-span-2'>
    <div className='mt-5 flex flex-col gap-3'>
      <p className='font-[500] text-sm'>All Editorial</p>
      <p className='font-[500] text-sm'>Idea Leader</p>
      <p className='font-[500] text-sm'>Brand In Focus</p>
      <p className='font-[500] text-sm'>Article and Blog</p>
      <p className='font-[500] text-sm'>News and PR</p>
    </div>
  </div>
  const vohtv = <div className='min-h-[200px] col-span-2'>
    <div className='mt-5 flex flex-col gap-3'>
      <p className='font-[500] text-sm'>All Videos</p>
      <p className='font-[500] text-sm'>Daily Broadcast</p>
      <p className='font-[500] text-sm'>Voice of Change</p>
      <p className='font-[500] text-sm'>The Big Idea</p>
    </div>
  </div>
  const routes = {
    '/brandinfocus': editorials,
    '/editorials': editorials,
    '/idealeader': editorials,
    '/articleandblogs': editorials,
    '/newsandpr': editorials,
    '/allbroadcast': vohtv,
    '/allbroadcast/dailybroadcast': vohtv,
    '/allbroadcast/voiceofchange': vohtv,
    '/allbroadcast/thebigidea': vohtv,

  }
  useEffect(() => {
    setChild(routes[router.asPath])
  }, [])

  return (<>
    <Navrbar2 childs={child} />
    <Component {...pageProps} />
    <Footer />
  </>)


}

export default MyApp
