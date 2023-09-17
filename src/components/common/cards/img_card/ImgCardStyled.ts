import styled from 'styled-components'

export const ContentWarpper = styled.div`
  width: 33%;
  
  @media (max-width: 872px) {
    width: 75%;
  }
`

export const ContentImgContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`

export const ContentImgWrapper = styled.div`
  width: 220px;
  height: 650px;
  position: absolute;

  @media (max-width: 872px) {
    position: relative;
  }
`
