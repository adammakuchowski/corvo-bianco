import styled from 'styled-components'

export const ContactContainer = styled.div`
  min-height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 872px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
  width: 75%;
  height: 200px;
  
  @media (max-width: 872px) {
    flex-direction: column;
  }

  > * {
    &:nth-child(1) {
      @media (max-width: 872px) {
        padding-bottom: 15px;
      }
    }

    &:nth-child(2) {
      border-right: solid 1px #C0C0C0;
      border-left: solid 1px #C0C0C0;

      @media (max-width: 872px) {
        border-right: none;
        border-left: none;

        border-top: solid 1px #C0C0C0;
        border-bottom: solid 1px #C0C0C0;

        padding-bottom: 15px;
      }
    }
  }
`
