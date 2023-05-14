import BlogCard from '../cards/blog_card/BlogCard'
import SectionHeader from '../section_header/SectionHeader'
import {BlogsCardsWrapper, BlogsContainer} from './BlogsStyled'

interface BlogCarData {
  date: Date;
  text: string;
  img: any;
}

const blogCardData: BlogCarData[] = [
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
    <section className='blog'>
      <BlogsContainer>
        <SectionHeader title='Vineyard' text='BLOG WINES' />
        <BlogsCardsWrapper>
          {blogCardData.map((data, index) => (
            <BlogCard key={index} img={data.img} date={data.date} text={data.text} />
          ))}
        </BlogsCardsWrapper>
      </BlogsContainer>
    </section>
  )
}

export default Blogs
