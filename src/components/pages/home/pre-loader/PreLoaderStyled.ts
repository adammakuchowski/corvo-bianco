import styled from 'styled-components'

export const PreLoaderContainer = styled.div`
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  transform: translateY(0);
  transition: all 0.4s ease-in-out;

  &.scrollDown {
    transform: translateY(-100%);
  }
`

export const SentencesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  color: #641B30;
  font-size: 30px;
  font-weight: 600;

  @media (max-width: 508px) {
    font-size: 20px;
  }
`

export const Sentence = styled.div`
  opacity: 0;
  transform: translateY(0);
  transition: all 1.2s ease-in-out;

  &.active {
    opacity: 1;

    transform: translateY(-150%);
  }
`
