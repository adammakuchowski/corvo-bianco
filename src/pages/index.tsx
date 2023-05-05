import Head from 'next/head'
import {
  Cinzel,
  Merriweather,
  Great_Vibes,
  Playfair_Display,
  Tangerine,
  Sacramento,
} from 'next/font/google'
import Banner from '@/components/banner/Banner'
import About from '@/components/about/About'
import ProductGallery from '@/components/product_gallery/ProductGallery'
import {CommunityEvents} from '@/components/community_events/CommunityEvents'

export const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400']
})

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '700']
})

export const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const sacramento = Sacramento({
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
      <Banner />
      <About />
      <ProductGallery />
      <CommunityEvents />
    </>
  )
}
