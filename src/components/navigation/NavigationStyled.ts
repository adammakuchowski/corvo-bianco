import styled from 'styled-components'

export const MenuContainer = styled.div`
  min-width: 240px;
  display: flex;
  justify-content: space-around;
  align-items: center;
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

interface PageItemProps {
  activePage: boolean;
}

export const PageItem = styled.li`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${({activePage}: PageItemProps) => activePage ? '#708238' : '#000000'};
  :hover{
    color: #708238;
  }
`
