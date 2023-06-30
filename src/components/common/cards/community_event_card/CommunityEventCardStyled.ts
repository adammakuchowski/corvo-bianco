import styled from 'styled-components'

export const CommunityEventCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
`

export const CardWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
  opacity: 0.6;
`

export const ImgNameWrapper = styled.div`
  color: white;
  min-width: 100%;
  height: 450px;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
  cursor: pointer;

  :hover{
    transform: scale(1.05);
    opacity: 1;
  }

  > * {
    &:nth-child(1) {
      font-size: 25px;
    }
    &:nth-child(2) {
      font-size: 50px;
    }
  }
`
