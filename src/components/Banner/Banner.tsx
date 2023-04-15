import Image from 'next/image'
import {GiVineLeaf} from 'react-icons/gi'
import {cinzel} from '@/pages'
import {
  BannerContainer,
  BannerNameWrapper,
  BannerOpacity,
  BannerWrapper,
  ImgWrapper,
} from './BannerStyled'

const img = '/images/banner.jpg'

const Banner = (): JSX.Element => {
  return (
    <BannerContainer>
      <GiVineLeaf size={50} style={{marginLeft: '50px'}} />

      <BannerWrapper>
        <ImgWrapper>
          <Image
            src={img}
            alt=''
            fill
            style={{objectFit: 'cover'}}
          />
        </ImgWrapper>
        <BannerOpacity/>
        <BannerNameWrapper>
          <div style={{fontSize: 20, opacity: 0.7}}>ROYAL CHOICE</div>
          <div className={cinzel.className} style={{fontSize: 110}}>WINEYARD</div>
          <div style={{fontSize: 30, marginTop: '50px', opacity: 0.9}}>EXCELLENT QUALITY</div>
        </BannerNameWrapper>
      </BannerWrapper>

      <GiVineLeaf size={50} style={{marginRight: '50px'}} />
    </BannerContainer>
  )
}

export default Banner
