import {
  MenuContainer,
  PagesContainer,
  ListWrapper,
  PageItem,
} from './NavigationStyled'

interface NavigationProps {
  fontSize?: string;
  options: string[];
  activePage?: number;
  setActivePage: Function;
}

const Navigation = ({fontSize = '18px', options, activePage, setActivePage}: NavigationProps): JSX.Element => {
  const switchPage = (index: number) => {
    setActivePage(index)
  }

  return (
    <MenuContainer>
      <PagesContainer>
        <ListWrapper style={{fontSize: fontSize}}>
          {options.map((option, index) => (
            <PageItem 
              key={index} 
              activePage={index === activePage}
              onClick={() => switchPage(index)}
            >{option}</PageItem>
          ))}
        </ListWrapper>
      </PagesContainer>
    </MenuContainer>
  )
}

export default Navigation
