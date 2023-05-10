import Image from 'next/image'
import moment from 'moment'
import {cinzel} from '@/pages'
import {
  BlogCardContainer,
  CardWrapper,
  ContentHeader,
  ContentText,
  ContentWrapper,
  ImgOpacity,
  ImgWrapper,
} from './BlogCardStyled'

interface BlogCardProps {
  img: any,
  date: Date,
  text: string,
}

const BlogCard = ({img, date, text}: BlogCardProps) => {
  const monthName = moment(date).format('MMMM')
  const monthAcronym = monthName.substring(0, 3)
  const days = moment(date).format('DD')

  return (
    <BlogCardContainer>
      <CardWrapper>
        <ImgWrapper>
          <Image
            src={img}
            alt=''
            fill
            style={{objectFit: 'cover'}}
          />
        </ImgWrapper>
        <ImgOpacity />
      </CardWrapper>
      <ContentWrapper>
        <ContentHeader className={cinzel.className}>
          <div>{monthAcronym}</div>
          <div>{days}</div>
        </ContentHeader>
        <ContentText>{text}</ContentText>
      </ContentWrapper>
    </BlogCardContainer>
  )
}

export default BlogCard
