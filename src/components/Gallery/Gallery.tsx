import GalleryCard from './GalleryCard/GalleryCard'
import {
  GalleryContainer,
  GalleryWrapper,
} from './GalleryStyled'

const imgs = [
  '/images/homeGallery1.jpg',
  '/images/homeGallery2.jpg',
  '/images/homeGallery3.jpg',
  '/images/homeGallery4.jpg',
  '/images/homeGallery5.jpg',
  '/images/homeGallery6.jpg',
]

const Gallery = (): JSX.Element => {
  return (
    <GalleryContainer>
      <GalleryWrapper>
        {imgs.map((img, index) => (
          <GalleryCard key={index} img={img} />
        ))}
      </GalleryWrapper>
    </GalleryContainer>
  )
}

export default Gallery
