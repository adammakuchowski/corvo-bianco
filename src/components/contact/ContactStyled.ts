import styled from 'styled-components'

export const ContactContainer = styled.div`
  min-height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
  width: 75%;
  height: 200px;

  > * {
    &:nth-child(2) {
      border-right: solid 1px #C0C0C0;
      border-left: solid 1px #C0C0C0;
    }
  }
`
