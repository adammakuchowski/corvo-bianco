import styled from 'styled-components'

export const SidePanelOverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 1002;

  opacity: 0;
  transition: all 0.3s ease-in-out;
  &.active {
    opacity: 1;
  }
`

export const SidePanelContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  transform: translate(0%, 0%);
  background-color: white;
  padding: 10px;
  z-index: 1002;
  width: 355px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;

  transform: translateX(100%);
  transition: all 0.4s ease-in-out;

  &.active {
    transform: translateY(0);
  }
`

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: solid 1px #1111;
  padding-bottom: 10px;
`

export const SidePanelButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: start;
`

export const SidePanelButtonsWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SidePanelNameWrapper = styled.div`
  font-size: 18px;
  font-weight: 500;
`

export const ChildrenContainer = styled.div`
  flex: 1;
  display: flex;
`
