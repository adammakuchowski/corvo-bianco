import styled from 'styled-components'

export const ProductGalleryContainer = styled.div`
  opacity: 0;
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
  margin-top: 30px;
  
  &.active {
    opacity: 1;
  }
`

export const ButtonWrapper = styled.div`
  margin-top: 30px;
`

export const ProductGalleryContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

interface ProductsListContainerPops {
  viewAll: boolean;
  productsCount: number;
}

export const ProductsListContainer = styled.div`
  margin: 50px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  transition: all 0.8s ease-in-out;

  background-color: blue;

  height: ${({viewAll, productsCount}: ProductsListContainerPops) => {
    const productsListLevels = productsCount / 4
    const levelsRounded = Math.ceil(productsListLevels)
    const height = viewAll ? 560 + 520 * (levelsRounded - 1) : 560

    return `${height}px`;
  }};
`
