import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
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
  min-width: 75%;
  min-height: 600px;
  z-index: -2;
  position: fixed;
`

export const BannerOpacity = styled.div`
  background-color: black;
  min-width: 75%;
  min-height: 600px;
  z-index: -1;
  color: red;
  position: fixed;
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
`
