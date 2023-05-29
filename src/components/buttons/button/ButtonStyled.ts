import styled from 'styled-components'

interface ButtonContainerProps {
  disabled: boolean;
}

export const ButtonContainer = styled.button`
  background: ${({disabled}: ButtonContainerProps) => disabled ? '#b3b3b3' : 'none'};
  color: ${({disabled}: ButtonContainerProps) => disabled ? '#0000' : '#808080'};
	border-radius: 23px;
	border: ${({disabled}: ButtonContainerProps) => disabled ? '1px solid #b3b3b3' : '1px solid #808080'};
	font-size: 15px;
  font-weight: 600;
	padding: 11px 53px;
	text-shadow: 0px 1px 0px #ffffff;
	cursor: ${({disabled}: ButtonContainerProps) => disabled ? 'auto' : 'pointer'};
  letter-spacing: 1px;
  
  transition: all 0.3s ease-in-out;
  :hover{
    border: 1px solid #0000;
    background-color: ${({disabled}: ButtonContainerProps) => disabled ? '#b3b3b3' : '#8ea648'};
    color: #0000;
  }
`
