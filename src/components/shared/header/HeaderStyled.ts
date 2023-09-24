import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 75%;
  height: 8vh;
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

  @media (max-width: 780px) {
    width: 90%;
  }

  @media (max-width: 484px) {
    margin-bottom: 20px;
    flex-direction: column-reverse;
    padding-bottom: 10px;
  }
`

export const BackHomeButtonWrapper = styled.div`
  position: absolute;
  top: 50;
  left: 0;

  @media (max-width: 484px) {
    position: relative;
    width: 100%;
  }
`
