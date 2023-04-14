import Head from 'next/head'
import { Cinzel, Merriweather, Great_Vibes} from 'next/font/google'
import Banner from '@/components/Banner/Banner'
import Slogan from '@/components/Slogan/Slogan'

export const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400']
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
      <Banner/>
      <Slogan/>
    </>
  )
}
