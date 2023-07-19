import styled from 'styled-components'

export const NavbarContainer = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;
  top: 0;
  z-index: 3;

  opacity: 0;
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;

  &.active {
    opacity: 1;
  }
`

export const ActionsWrapper = styled.div`
  font-size: 20px;
  display: flex;
  gap: 20px;
  min-width: 100px;
  margin-right: 30px;
  justify-content: flex-end;

  > * {
      &:nth-child(-n+3) {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
          :hover{
          color: #708238;
        }
      }
    }
`

export const CartWrapper = styled.div`
  position: relative;
  cursor: pointer;
`

export const CartCounter = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 15px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #641B30;
`

export const SettingWrapper = styled.div`
  font-size: 20px;
  display: flex;
  margin-left: 30px;
  min-width: 100px;
`

export const OptionsContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  border-bottom: solid 1px #C0C0C0;
`
