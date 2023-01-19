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
      <a href='#' className='font-[500] text-sm '>All Editorial</a>
      <a href='#' className='font-[500] text-sm '>Idea Leader</a>
      <a href='#' className='font-[500] text-sm '>Brand In Focus</a>
      <a href='#' className='font-[500] text-sm '>Article and Blog</a>
      <a href='#' className='font-[500] text-sm '>News and PR</a>
    </div>
  </div>
  const vohtv = <div className='min-h-[200px] col-span-2'>
    <div className='mt-5 flex flex-col gap-3'>
      <a href='#' className='font-[500] text-sm '>All Videos</a>
      <a href='#' className='font-[500] text-sm '>Daily Broadcast</a>
      <a href='#' className='font-[500] text-sm '>Voice of Change</a>
      <a href='#' className='font-[500] text-sm '>The Big Idea</a>
    </div>
  </div>
  const events = <div className='min-h-[300px] col-span-2'>
    <div className='mt-5 flex flex-col gap-3'>
      <a className='whitespace-nowrap font-[500] text-sm ' href='/editorials'> All Events</a>
      <a className='whitespace-nowrap font-[500] text-sm ' href='/editorials#idealeader'> Public Health Awarness</a>
      <a className='whitespace-nowrap font-[500] text-sm ' href='/editorials#brandinfocus'>Brand Solutions</a>
      <a className='whitespace-nowrap font-[500] text-sm ' href='/editorials#articleandblogs'> FlagShip Events</a>
      <a className='whitespace-nowrap font-[500] text-sm ' href='/editorials#newsandpr'> Event 1</a>
      <a className='whitespace-nowrap font-[500] text-sm ' href='/editorials#newsandpr'> Event 2</a>
      <a className='whitespace-nowrap font-[500] text-sm ' href='/editorials#newsandpr'> Event 3</a>
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
    '/events': events
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
