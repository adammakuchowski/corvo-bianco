import {
  SyntheticEvent,
  useEffect,
  useState,
} from 'react'
import {IoCloseCircleOutline} from 'react-icons/io5'
import {BsTrash} from 'react-icons/bs'

import {
  SidePanelButtonsContainer,
  SidePanelButtonsWrapper,
  SidePanelNameWrapper,
  ChildrenContainer,
  HeaderContainer,
  SidePanelContainer,
  SidePanelOverlayContainer,
} from './SidePanelStyled'
import IconButton from '../buttons/icon_button/IconButton'


interface SidePanelProps {
  children: JSX.Element;
  sidePanelIsOpen: boolean;
  setIsSidePanelOpen: (value: boolean) => void;
  onClear: () => void;
  isTrashDisabled: boolean;
  onCloseModal: () => void;
  headerName: string;
}

const SidePanel = ({
  children,
  sidePanelIsOpen,
  setIsSidePanelOpen,
  onClear,
  isTrashDisabled,
  onCloseModal,
  headerName,
}: SidePanelProps): JSX.Element | null => {
  const [sidePanelClassName, setSidePanelClassName] = useState<string>('')

  useEffect(() => {
    if (sidePanelIsOpen) {
      setSidePanelClassName('active')
      document.body.style.overflow = 'hidden'
    }

    return () => {
      setSidePanelClassName('')
      document.body.style.overflow = 'auto'
    }
  }, [sidePanelIsOpen])

  const onSidePanel = () => setIsSidePanelOpen(false)
  const onStopPropagation = (event: SyntheticEvent) => event.stopPropagation()

  if (!sidePanelIsOpen) return null

  return (
    <SidePanelOverlayContainer className={sidePanelClassName} onClick={onSidePanel} >
      <SidePanelContainer className={sidePanelClassName} onClick={onStopPropagation}>
        <HeaderContainer>
          <SidePanelButtonsContainer>
            <SidePanelButtonsWrapper>
              <IconButton iconComponent={<BsTrash />} iconAction={onClear} fontSize='20px' disabled={isTrashDisabled} />
              <SidePanelNameWrapper>{headerName}</SidePanelNameWrapper>
              <IconButton iconComponent={<IoCloseCircleOutline />} iconAction={onCloseModal} fontSize='25px' />
            </SidePanelButtonsWrapper>
          </SidePanelButtonsContainer>
        </HeaderContainer>
        <ChildrenContainer>
          {children}
        </ChildrenContainer>
      </SidePanelContainer>
    </SidePanelOverlayContainer>
  )
}

export default SidePanel
