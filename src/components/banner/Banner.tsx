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
          <div>ROYAL CHOICE</div>
          <div className={cinzel.className}>WINEYARD</div>
          <div>EXCELLENT QUALITY</div>
        </BannerNameWrapper>
      </BannerWrapper>

      <GiVineLeaf size={50} style={{marginRight: '50px'}} />
    </BannerContainer>
  )
}

export default Banner
