import {merriweather} from '@/pages'
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
        <ListWrapper>
          {options.map((option, index) => (
            <PageItem 
              className={merriweather.className}
              style={{fontSize: fontSize}}
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
