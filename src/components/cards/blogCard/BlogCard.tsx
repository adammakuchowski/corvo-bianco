import Image from 'next/image'
import moment from 'moment'
import {
  BlogCardContainer,
  CardWrapper,
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
  const month = moment(date).format('MMMM')
  const monthAcronym = month.substring(0, 3)
  const days = date.getDate()

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
        {monthAcronym}
        {days}
      </ContentWrapper>
    </BlogCardContainer>
  )
}

export default BlogCard
