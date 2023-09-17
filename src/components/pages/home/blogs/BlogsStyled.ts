import styled from 'styled-components'

export const BlogsContainer = styled.div`
  min-height: 600px;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BlogsCardsWrapper = styled.div`
  min-height: 300px;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 1111px) {
    flex-direction: column;
    margin-bottom: 100px;
  }
`
