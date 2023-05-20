import styled from 'styled-components'

export const IconActionButtonContainer = styled.button`
  border: none;
	padding: 0;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  border: solid 1px #999999;
  border-radius: 50%;
  height: 55px;
  width: 55px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  :hover{
    border: solid 1px #e5e5e5;
  }
`

export const IconActionButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  color: #808080;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  transition: all 0.3s ease-in-out;
  :hover{
    background-color: #8ea648;
    color: #e5e5e5;
  }
`
