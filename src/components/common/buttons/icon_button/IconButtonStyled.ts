import styled from 'styled-components'

export const DisabledIconButtonContainer = styled.button`
  border: none;
  padding: 0;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d3d3d3;
`

export const IconButtonContainer = styled.button`
  border: none;
  padding: 0;
  background: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
    color: #708238;
  }
`
