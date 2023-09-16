import styled from 'styled-components'

export const BlogCardContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;

  @media (max-width: 1111px) {
    width: 100%;
  }
`

export const CardWrapper = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 300px;
  z-index: -2;
  position: absolute;
`

export const ImgOpacity = styled.div`
  background-color: black;
  width: 100%;
  height: 300px;
  z-index: -1;
  position: absolute;
  opacity: 0.2;
`

export const ContentWrapper = styled.div`
  width: 50%;
  height: 300px;

  display: flex;
  flex-direction: column;
`

export const ContentHeader = styled.div`
  height: 50%;
  display: flex;
  align-items: center;

  > * {
    &:nth-child(1) {
      font-size: 50px;
      font-weight: 500;
      color: #708238;
      position: relative;
      left: 40px;

      @media (max-width: 508px) {
        font-size: 30px;
      }
    }
    &:nth-child(2) {
      font-size: 120px;
      font-weight: 500;
      color: #d8d8d8;

      @media (max-width: 508px) {
        font-size: 80px;
      }
    }
  }
`

export const ContentText = styled.div`
  height: 50%;

  display: flex;
  align-items: center;

  letter-spacing: 3px;
  line-height: 1.5;
  padding-left: 40px;
`
