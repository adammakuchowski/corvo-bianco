import styled from 'styled-components'

export const ProductCartOverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 1002;

  opacity: 0;
  transition: all 0.3s ease-in-out;
  &.active {
    opacity: 1;
  }
`

export const ProductCartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  transform: translate(0%, 0%);
  background-color: white;
  padding: 10px;
  z-index: 1002;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;

  transform: translateX(100%);
  transition: all 0.4s ease-in-out;

  &.active {
    transform: translateY(0);
  }
`

export const HeaderContainer = styled.div`
  width: 100%;
  height: 3%;
  background-color: blue;
  display: flex;
`

export const CartButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: start;
`

export const CartButtonsWrapper = styled.div`
  background-color: green;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ProductCartContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: gold;
`
