import styled from 'styled-components'

export const MenuContainer = styled.div`
  min-width: 240px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: gold;
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
`
export const PageItem = styled.li`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover{
    color: #641B30;
  }
`
