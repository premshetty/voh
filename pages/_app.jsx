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
      <a href='/editorials' className='font-[500] text-sm '>All Editorial</a>
      <a href='/editorials#idealeader' className='font-[500] text-sm '>Idea Leader</a>
      <a href='/editorials#brandinfocus' className='font-[500] text-sm '>Brand In Focus</a>
      <a href='/editorials#articleandblogs' className='font-[500] text-sm '>Article and Blog</a>
      <a href='/editorials#newsandpr' className='font-[500] text-sm '>News and PR</a>
    </div>
  </div>
  const vohtv = <div className='min-h-[200px] col-span-2'>
    <div className='mt-5 flex flex-col gap-3'>
      <a href='/allbroadcast' className='font-[500] text-sm '>All Videos</a>
      <a href='/allbroadcast#dailybroadcast' className='font-[500] text-sm '>Daily Broadcast</a>
      <a href='/allbroadcast#voiceofchanges' className='font-[500] text-sm '>Voice of Change</a>
      <a href='/allbroadcast#thebigidea' className='font-[500] text-sm '>The Big Idea</a>
    </div>
  </div>
  const events = <div className='min-h-[300px] col-span-2'>
    <div className='mt-5 flex flex-col gap-3'>
      <a className='whitespace-nowrap font-[500] text-sm ' href='/events'> All Events</a>
      <a className='whitespace-nowrap font-[500] text-sm ' href='/events#publichealthawarness'> Public Health Awarness</a>
      <a className='whitespace-nowrap font-[500] text-sm ' href='/events#brandsolution'>Brand Solutions</a>
      <a className='whitespace-nowrap font-[500] text-sm ' href='/events#flagshipevent'> FlagShip Events</a>
      <a className='whitespace-nowrap font-[500] text-sm ' href='/events#'> Event 1</a>
      <a className='whitespace-nowrap font-[500] text-sm ' href='/events#'> Event 2</a>
      <a className='whitespace-nowrap font-[500] text-sm ' href='/events#'> Event 3</a>
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
    '/events': events,
    '/events/flagshipevents': events,
    '/events/brandsolution': events,

  }
  useEffect(() => {
    setChild(routes[router.pathname])
  }, [])

  return (<>
    <Navrbar2 childs={child} />
    <Component {...pageProps} />
    <Footer />
  </>)


}

export default MyApp
