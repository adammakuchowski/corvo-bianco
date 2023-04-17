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

export const ContentWarpper = styled.div`
  /* background-color: blue; */
  min-width: 33%;
  max-width: 33%;
  min-height: 80%;
`

export const LeftContentHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* background-color: pink; */

  > * {
      &:nth-child(1) {
        font-size: 30px;
        margin: 0px;
        color: #949494;
      }

      &:nth-child(2) {
        font-size: 90px;
        font-weight: 400;
        position: relative;
        margin-top: -40px;
        color: #708238;
        border-bottom: solid 1px #C0C0C0;
        padding-bottom: 20px;
      }

      &:nth-child(3) {
        font-size: 25px;
        margin: 0px;
        padding: 0px 10px;
        position: relative;
        bottom: 15px;
        background-color: white;
        color: #949494;
      }
    }
`

export const CircleContentImgContainer = styled.div`
  /* background-color: gold; */
  width: 100%;
  height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const CircleContentImgWrapper = styled.div`
  /* background-color: red; */
  width: 220px;
  height: 220px;

  border-radius: 50%;
  border: solid 2px #C0C0C0;
  overflow: hidden;

  position: absolute;
`

export const ContentDescriptionContainer = styled.div`
  /* background-color: green; */
  width: 100%;
  min-height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ContentDescriptionWrapper = styled.div`
  margin-top: 10px;
  padding: 0;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  width: 80%;
`

export const ContentAutograph = styled.div`
  margin-top: 20px;
  font-size: 25px;
  font-weight: bold;
`

export const SecondContentImgContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`

export const SecondContentImgWrapper = styled.div`
  width: 220px;
  height: 650px;
  position: absolute;
`

export const RightContentHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > * {
      &:nth-child(1) {
        font-size: 30px;
        margin: 0px;
        color: #708238;
      }

      &:nth-child(2) {
        font-size: 18px;
        font-weight: 400;
        color: #949494;
        border-bottom: solid 1px #C0C0C0;
        padding-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45%;
      }

      &:nth-child(3) {
        margin-bottom: 20px;
      }
    }
`
