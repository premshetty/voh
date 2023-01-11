import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navrbar2 from '../components/home/Navrbar2'
import Footer from '../components/home/Footer'
function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Navrbar2 />
    <Component {...pageProps} />
    <Footer />
  </>)


}

export default MyApp
