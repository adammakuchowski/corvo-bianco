import {
  MenuContainer,
  PagesContainer,
  ListWrapper,
  PageItem,
} from './NavigationStyled'

interface NavigationProps {
  fontSize?: string;
  options: string[];
}

const Navigation = ({fontSize = '18px', options}:NavigationProps): JSX.Element => {
  return (
    <MenuContainer>
      <PagesContainer>
        <ListWrapper style={{fontSize: fontSize}}>
          {options.map((option, index) => (
            <PageItem key={index}>{option}</PageItem>
          ))}
        </ListWrapper>
      </PagesContainer>
    </MenuContainer>
  )
}

export default Navigation
