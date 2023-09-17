import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;

  opacity: 0;
  transform: translateY(100%);
  transition: opacity 1.5s ease, transform 1.5s ease;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`
