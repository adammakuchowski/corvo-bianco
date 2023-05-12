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
`

export const IconActionButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  color: #808080;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease-in-out;
  :hover{
    background-color: #7c903e;
    color: #cbcbcb;
  }
`
