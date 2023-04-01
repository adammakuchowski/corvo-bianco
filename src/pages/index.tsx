import Head from 'next/head'
import { Cinzel, Merriweather} from 'next/font/google'
import Slider from '../components/Slider/Slider'
import About from '../components/About/About'

export const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700']
})


export default function Home() {
  return (
    <>
      <Head>
        <title>Corvo Bianco Premium Wines</title>
        <meta name="description" content="High quality premium wine shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider/>
      <About/>
    </>
  )
}
