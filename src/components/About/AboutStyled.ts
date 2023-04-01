import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f9f9f9;
`
export const NameContainer = styled.div`
  width: 80vw;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top: solid 1px #C0C0C0;
  border-bottom: solid 1px #C0C0C0;
`

export const NameWrapper = styled.div`
  font-size: 100px;
  color: #641B30;
`
export const DescriptionContainer = styled.div`
    margin-top: 10px;
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: solid 1px #C0C0C0;
`
export const DescriptionContent = styled.p`
  width: 60vw;
  font-size: 22px;
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.6;
`
