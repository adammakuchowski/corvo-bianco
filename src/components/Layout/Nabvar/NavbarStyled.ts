import styled from 'styled-components'

export const NavbarContainer = styled.div`
  background-color: red;
  height: 100px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #F1F1F1;
  z-index: 3;
`

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 240px;
  position: relative;
  left: 50px;
  color: #641B30;
`

export const NameWrapper = styled.div`
  font-size: 35px;
  font-weight: bold;
`

export const PagesContainer = styled.div`
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ListWrapper = styled.ul`
  padding: 0px;
  display: flex;
  list-style: none;
  color: black;
  gap: 70px;

  font-size: 18px;
`
export const PageItem = styled.li`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover{
    color: #641B30;
  }
`

export const OptionsContainer = styled.div`
  min-width: 240px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const ActionsWrapper = styled.div`
  font-size: 20px;
  display: flex;
  gap: 20px;
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

  cursor: pointer;
`
