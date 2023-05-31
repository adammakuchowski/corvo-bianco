import styled from 'styled-components'

export const ButtonDisabledContainer = styled.button`
  background-color: #b3b3b3;
  color: #0000;
  border-radius: 23px;
  border: 1px solid #b3b3b3;
  font-size: 15px;
  font-weight: 600;
  padding: 11px 53px;
  text-shadow: 0px 1px 0px #ffffff;
  letter-spacing: 1px;

  transition: all 1.8s ease;
  &.active {
    background-color: #747474;
  }
`
