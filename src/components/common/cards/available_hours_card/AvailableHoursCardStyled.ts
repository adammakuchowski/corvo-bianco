import styled from 'styled-components'

export const AvailableHoursCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 33%;
  height: 70%;
  
  @media (max-width: 872px) {
    width: 210px;
  }
`

export const HeaderContentWrapper = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  color: #949494;
`

export const ContentWrapper = styled.p`
  margin: 0;
  font-size: 20px;
`
