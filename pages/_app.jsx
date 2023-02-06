import '../styles/globals.css'
import Navrbar2 from '../components/home/Navrbar2'
import Footer from '../components/home/Footer'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import BasicModal from '../components/reusalbles/Modal'
import Link from 'next/link'
function MyApp({ Component, pageProps }) {
  const [child, setChild] = useState('')
  const [open, setOpen] = useState(false)
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
      <Link className='whitespace-nowrap font-[500] text-sm ' href='/events'> All Events</Link>
      <Link className='whitespace-nowrap font-[500] text-sm ' href='/events#publichealthawarness'> Public Health Awarness</Link>
      <Link className='whitespace-nowrap font-[500] text-sm ' href='/events#brandsolution'>Brand Solutions</Link>
      <Link className='whitespace-nowrap font-[500] text-sm ' href='/events#flagshipevent'> FlagShip Events</Link>
      <Link className='whitespace-nowrap font-[500] text-sm ' href='/events/1'> Event 1</Link>
      <Link className='whitespace-nowrap font-[500] text-sm ' href='/events/2'> Event 2</Link>
      <Link className='whitespace-nowrap font-[500] text-sm ' href='/events/3'> Event 3</Link>
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
    '/events/1': events,
    '/events/2': events,
    '/events/3': events,
  }
  useEffect(() => {
    setChild(routes[router.pathname])
  }, [])
  let counter = 0;

  useEffect(() => {
    if (router.pathname.includes('/events')) {
      document.getElementsByTagName('body')[0].onscroll = function () {
        if (counter > 1 && counter < 3) {
          setOpen(true)
        }
        counter++

      };
    }
  }, [])


  return (<>
    <Navrbar2 childs={child} />
    <BasicModal openstatus={open} />
    <Component {...pageProps} />
    <Footer />
  </>)


}

export default MyApp
