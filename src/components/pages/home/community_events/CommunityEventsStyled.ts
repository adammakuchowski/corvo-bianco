import styled from 'styled-components'

export const CommunityEventsContainer = styled.div`
  margin-top: 20px;
  height: 650px;
  opacity: 0;
  transition: all 1.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 75%;
`
