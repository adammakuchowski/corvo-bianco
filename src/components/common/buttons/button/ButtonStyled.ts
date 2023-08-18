import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background: none;
  color: #808080;
	border-radius: 23px;
	border: 1px solid #808080;
	font-size: 15px;
  font-weight: 600;
	padding: 11px 53px;
	text-shadow: 0px 1px 0px #ffffff;
	cursor: pointer;
  letter-spacing: 1px;
  
  transition: all 0.3s ease-in-out;
  :hover{
    border: 1px solid #0000;
    background-color: #8ea648;
    color: #0000;
  }
`

export const DisabledButtonContainer = styled.button`
  background: none;
  color: #bcbcbc;
	border-radius: 23px;
	border: 1px solid #bcbcbc;
	font-size: 15px;
  font-weight: 600;
	padding: 11px 53px;
	text-shadow: 0px 1px 0px #ffffff;
  letter-spacing: 1px;
`
