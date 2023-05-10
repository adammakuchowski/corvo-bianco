import BlogCard from '../cards/blog_card/BlogCard'
import SectionHeader from '../section_header/SectionHeader'
import {BlogsCardsWrapper, BlogsContainer} from './BlogsStyled'

const blogCardData = [
  {
    date: new Date(2023, 7, 8),
    text: 'There are many variations of passages of Lorem Ipsum available.',
    img: '/images/blog1.jpg',
  },
  {
    date: new Date(2023, 10, 11),
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    img: '/images/blog2.jpg',
  }
]

const Blogs = () => {
  return (
    <BlogsContainer>
      <SectionHeader title='Vineyard' text='BLOG WINES' />
      <BlogsCardsWrapper>
        {blogCardData.map((data, index) => (
          <BlogCard key={index} img={data.img} date={data.date} text={data.text} />
        ))}
      </BlogsCardsWrapper>
    </BlogsContainer>
  )
}

export default Blogs
