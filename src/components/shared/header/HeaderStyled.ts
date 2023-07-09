import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 75%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #C0C0C0;
  top: 0;
  z-index: 3;

  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  position: relative;

  &.active {
    opacity: 1;
  }
`

export const BackHomeButtonWrapper = styled.div`
  position: absolute;
  top: 50;
  left: 0;
`
