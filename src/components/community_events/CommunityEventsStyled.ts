import styled from 'styled-components'

export const CommunityEventsContainer = styled.div`
  height: 800px;
  opacity: 0;
  transition: all 1.5s ease-in-out;

  &.active {
    opacity: 1;
  }
`

export const CommunityEventsCardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  height: 450px;
`
