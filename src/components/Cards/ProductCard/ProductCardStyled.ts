import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  width: 265px;
  height: 440px;
`

interface ImgContainerProps {
  active: boolean;
}

export const ImgContainer = styled.button`
  border: none;
	padding: 0;
  position: relative;
  background: none;
  
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;

  border: ${({active}: ImgContainerProps) => active ? '0' : 'solid 1px #C0C0C0'};
  /* transition: all 0.2s ease-in-out; */
  box-shadow: ${({active}: ImgContainerProps) => active ? '0 0 5px rgba(124, 144, 62, 1)' : '0'};
  cursor: pointer;
  :hover{
      border: 0;
      box-shadow: ${({active}: ImgContainerProps) => active ? '0' : '0 0 5px rgba(0, 0, 0, 0.5)'};
    }
`

export const ImgWrapper = styled.div`
  width: 45%;
  height: 100%;
  position: relative;
  display: flex;
`

export const ProductCardActionWrapper = styled.div`
  border: solid 1px white;
  width: 100%;
  height: 20%;
  display: flex;
`
