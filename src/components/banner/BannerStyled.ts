import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;

  opacity: 0;
  transform: translateY(100%);
  transition: all 1s ease;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`

export const BannerWrapper = styled.div`
  min-width: 75%;
  min-height: 600px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImgWrapper = styled.div`
  min-width: 100%;
  min-height: 600px;
  z-index: -2;
  position: absolute;
`

export const BannerOpacity = styled.div`
  background-color: black;
  min-width: 100%;
  min-height: 600px;
  z-index: -1;
  color: red;
  position: absolute;
  opacity: 0.4;
`

export const BannerNameWrapper = styled.div`
  color: white;
  min-width: 100%;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > * {
    &:nth-child(1) {
      font-size: 20px;
      opacity: 0.7;
    }
    &:nth-child(2) {
      font-size: 110px;
    }
    &:nth-child(3) {
      font-size: 30px;
      margin-top: 50px; 
      opacity: 0.9;
    }
  }
`
