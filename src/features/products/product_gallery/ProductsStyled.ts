import styled from 'styled-components'

export const ProductGalleryContainer = styled.div`
  opacity: 0;
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
  margin-top: 30px;
  
  &.active {
    opacity: 1;
  }
`

export const ProductGalleryContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

interface ProductsPageContainerPops {
  viewAll: boolean;
  productsCount: number;
}

export const ProductsPageContainer = styled.div`
  margin: 50px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  transition: all 0.8s ease-in-out;

  height: ${({viewAll, productsCount}: ProductsPageContainerPops) => {
    const productsPageLevels = productsCount / 4
    const levelsRounded = Math.ceil(productsPageLevels)
    const height = viewAll ? 560 + 530 * (levelsRounded - 1) : 560

    return `${height}px`;
  }};
`
