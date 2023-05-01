import styled from 'styled-components'

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: calc(100vh - 150px);
  background-color: #f9f9f9;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const ImageWrapper = styled.div`
  width: 1200px;
  height: 750px;
  display: flex;
  position: relative;

  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`

export const ArrowContainer = styled.button`
  border: none;
	padding: 0;
  position: absolute;
  background: none;
  font-size: 60px;
  z-index: 2;
  color: #e0e0e0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover{
    color: #641B30;
  }
`
