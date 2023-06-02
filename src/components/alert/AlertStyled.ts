import styled from 'styled-components'

export const AlertContainer = styled.div`
  position: fixed;
  height: 150px;
  width: 250px;
  z-index: 1000;
  left: 100;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translateY(-100%);
  transition: all 0.4s ease-in-out;

  &.active {
    transform: translateY(0);
  }
`

export const AlertIconWrapper = styled.div`
  font-size: 50px;
  color: #8ea648;
`

