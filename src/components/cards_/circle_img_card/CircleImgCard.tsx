import Image from 'next/image'
import {playfairDisplay, greatVibes, tangerine, sacramento} from '@/pages'
import {
  CircleContentImgContainer,
  CircleContentImgWrapper,
  ContentAutograph,
  ContentDescriptionContainer,
  ContentDescriptionWrapper,
  ContentWarpper,
  ContentHeaderWrapper,
} from './CircleImgCardStyled'

interface CircleImgCardProps {
  imgs: any[];
  headerLocation: string;
  headerYear: string;
  headerText: string;
  description: string;
  autograph: string;
}

const CircleImgCard = ({
  imgs,
  headerLocation,
  headerYear,
  headerText,
  description,
  autograph,
}: CircleImgCardProps): JSX.Element => {
  
  return (
    <ContentWarpper>
      <ContentHeaderWrapper>
        <div className={playfairDisplay.className}>{headerLocation}</div>
        <div className={playfairDisplay.className}>{headerYear}</div>
        <div className={greatVibes.className}>{headerText}</div>
      </ContentHeaderWrapper>

      <CircleContentImgContainer>
        <CircleContentImgWrapper>
          <Image
            src={imgs[0]}
            alt=''
            fill
            style={{objectFit: 'cover'}}
          />
        </CircleContentImgWrapper>
      </CircleContentImgContainer>

      <ContentDescriptionContainer>
        <ContentDescriptionWrapper className={tangerine.className}>
          {description}
        </ContentDescriptionWrapper>
        <ContentAutograph className={sacramento.className}>
          {autograph}
        </ContentAutograph>
      </ContentDescriptionContainer>
    </ContentWarpper>
  )
}

export default CircleImgCard
