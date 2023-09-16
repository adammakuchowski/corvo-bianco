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

  @media (max-width: 780px) {
    > * {
      &:nth-child(1) {
        display: none;
      }
      &:nth-child(3) {
        display: none;
      }
    }
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

      @media (max-width: 872px) {
        font-size: 15px;
      }

      @media (max-width: 624px) {
        font-size: 11px;
      }

      @media (max-width: 414px) {
        font-size: 7px;
      } 
    }
    &:nth-child(2) {
      font-size: 110px;

      @media (max-width: 872px) {
        font-size: 82px;
      }

      @media (max-width: 624px) {
        font-size: 62px;
      }

      @media (max-width: 414px) {
        font-size: 42px;
      } 
    }
    &:nth-child(3) {
      font-size: 30px;
      margin-top: 50px; 
      opacity: 0.9;

      @media (max-width: 872px) {
        font-size: 22px;
      }

      @media (max-width: 624px) {
        font-size: 17px;
      }

      @media (max-width: 414px) {
        font-size: 12px;
      } 
    }
  }
`
