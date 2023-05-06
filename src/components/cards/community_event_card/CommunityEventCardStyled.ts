import styled from 'styled-components'

export const CommunityEventCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40%;
`

export const CardWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImgWrapper = styled.div`
  min-width: 100%;
  height: 450px;
  z-index: -2;
  position: absolute;
`

export const ImgOpacity = styled.div`
  background-color: black;
  min-width: 100%;
  min-height: 450px;
  z-index: -1;
  position: absolute;
  opacity: 0.5;
`

export const ImgNameWrapper = styled.div`
  color: white;
  min-width: 100%;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.4s ease-in-out;

  > * {
    &:nth-child(1) {
      font-size: 20px;
      opacity: 0.7;
    }
    &:nth-child(2) {
      font-size: 50px;
    }
  }
`
