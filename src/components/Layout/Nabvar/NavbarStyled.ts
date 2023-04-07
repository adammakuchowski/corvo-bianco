import styled from 'styled-components'

export const NavbarContainer = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;
  background-color: #F1F1F1;
  top: 0;
  z-index: 3;
`

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 240px;
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

export const MenuContainer = styled.div`
  min-width: 240px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const ActionsWrapper = styled.div`
  font-size: 20px;
  display: flex;
  gap: 20px;
  min-width: 100px;
  margin-right: 30px;
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
  min-width: 100px;
  font-size: 20px;
  display: flex;
  margin-left: 30px;

  cursor: pointer;
`

export const OptionsContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  border-bottom: solid 1px #C0C0C0;
`
