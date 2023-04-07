import styled from 'styled-components'

export const GalleryCardContainer = styled.div`
    width: 300px;
    height: 200px;
    position: relative;
    background-color: gold;
    cursor: pointer;

    transition: all 0.2s ease-in-out;
    :hover{
        transform: scale(1.01);
    }

    -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`
