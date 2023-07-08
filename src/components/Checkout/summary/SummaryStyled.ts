import styled from 'styled-components'

export const SummaryContainer = styled.div`
  width: 75%;
  height: 70vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  position: relative;

  &.active {
    opacity: 1;
  }
`
