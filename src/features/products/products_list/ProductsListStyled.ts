import styled from 'styled-components'

export const ProductsListContainer = styled.div`
  max-width: 75%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 90px;
  padding: 5px;
  overflow: hidden;

  @media (max-width: 1773px) {
    width: 986px;
  }

  @media (max-width: 1304px) {
    width: 637px;
  }

  @media (max-width: 827px) {
    width: 288px;
  }
`
