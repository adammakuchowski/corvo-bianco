import styled from 'styled-components'

export const TextButtonContainer = styled.button`
  font-family: none;
  border: none;
	padding: 0;
  background: none;
  display: flex;
  justify-content: flex-start;
	font-size: 15px;
  font-weight: 600;
	text-shadow:0px 1px 0px #ffffff;
	cursor: pointer;
  transition: all 0.2s ease;
  
  :hover {
    color: #708238;
    transform: scale(1.01);
  }
`

export const DisabledTextButtonContainer = styled.button`
  font-family: none;
  border: none;
	padding: 0;
  background: none;
  display: flex;
  justify-content: flex-start;
	font-size: 15px;
  font-weight: 600;
	text-shadow:0px 1px 0px #ffffff;
  color: #d3d3d3;
`
