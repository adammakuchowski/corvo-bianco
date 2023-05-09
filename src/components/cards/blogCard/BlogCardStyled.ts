import styled from 'styled-components'

export const BlogCardContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
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
  opacity: 0.6;
`

export const ContentWrapper = styled.div`
  width: 50%;
  height: 250px;
`
