import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const FooterWrapper = styled.div`
  width: 75%;

  @media (max-width: 780px) {
    width: 90%;
  }
`

export const FooterToolbox = styled.div`
  background-color: #EFEFEF;
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  opacity: 0;
  transform: translateY(50%);
  transition: all 1s ease;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`

export const FooterToolboxWrapper = styled.div`
  width: 53%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const IconWrapper = styled.div`
  margin-left: 25px;
  color: #999999;
  display: flex;
  width: 100%;
  font-size: 20px;
  gap: 25px;
`

export const ArrowWrapper = styled.div`
  color: #999999;

  @media (max-width: 872px) {
    display: none;
  }
`

export const FooterNameWrapper = styled.div`
  font-size: 35px;
  font-weight: bold;
  border-bottom: solid 1px #C0C0C0;
  margin-top: 35px;
  padding-bottom: 20px;
  color: #641B30;
  opacity: 0;
  transform: translateY(150%);
  transition: all 1s ease;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 489px) {
    display: none;
  } 
`
