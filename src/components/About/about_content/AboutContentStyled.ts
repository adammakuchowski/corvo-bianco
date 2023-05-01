import styled from 'styled-components'

export const AboutContentContainer = styled.div`
  width: 75%;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;

  > * {
      &:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
`
