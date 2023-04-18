import Image from 'next/image'
import {GalleryCardContainer} from './GalleryCardStyled'

interface GalleryCardProps {
  img: any;
}

const GalleryCard = ({img}: GalleryCardProps): JSX.Element => {
  return (
    <GalleryCardContainer>
      <Image
        src={img}
        alt=''
        fill
        style={{objectFit: 'fill'}}
      />
    </GalleryCardContainer>
  )
}

export default GalleryCard
