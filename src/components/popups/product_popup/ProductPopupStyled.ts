import styled from 'styled-components'

export const PopupOverlayContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.6s ease;
  &.active {
    opacity: 1;
  }
`

export const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10px;
  z-index: 1000;
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.6s ease;
  &.active {
    opacity: 1;
  }
`

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 30px;

  position: relative;
  right: 10px;
  top: 10px;
`

export const CloseButtonWrapper = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 35px;
  padding: 0;
  margin: 0;
  color: #808080;
  transition: all 0.2s ease-in-out;

  :hover{
    color: #7c903e;
    transform: scale(1.1);
  }
`

export const PopupContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const PopupImgContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const ImgWrapper = styled.div`
  width: 40%;
  min-width: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PopupDataContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
/* 
  background-color: pink; */
`

export const DataHeaderWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  /* background-color: gold; */

  justify-content: start;
  align-items: center;
  padding-left: 10px;
`

export const DataHeader = styled.div`
  font-weight: 500;
  font-size: 40px;
`

export const DataContainer = styled.div`
  width: 100%;
  height: 40%;

  /* background-color: gray; */

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`


