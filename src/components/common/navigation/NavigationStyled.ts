import styled from 'styled-components'

export const MenuContainer = styled.div`
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

  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
  }
`

interface PageItemProps {
  activePage: boolean;
}

export const PageItem = styled.button`
  border: none;
  padding: 0;
  background: none;
  transition: all 0.2s ease-in-out;
  color: ${({activePage}: PageItemProps) => activePage ? '#708238' : '#000000'};
  border-bottom: ${({activePage}: PageItemProps) => activePage ? '1px solid #708238' : ''};
  cursor: pointer;

  :hover{
    color: #708238;
  }
`
