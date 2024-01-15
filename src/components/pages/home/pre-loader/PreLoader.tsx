import {useState, useEffect} from 'react'

import {cinzel} from '@/fonts/fonts'

import {
  PreLoaderContainer,
  Sentence,
  SentencesWrapper
} from './PreLoaderStyled'

interface PreLoaderProps {
  setClassName: (className: string) => void;
}

export const PreLoader = ({setClassName}: PreLoaderProps): JSX.Element | null => {
  const [preLoaderClass, setPreLoaderClass] = useState<string>('')
  const [isLoaderExecuted, setIsLoaderExecuted] = useState<any>(null)

  const [firstWorldClass, setFirstWorldClass] = useState<string>('')
  const [secondWorldClass, setSecondWorldClass] = useState<string>('')
  const [thirdWorldClass, setThirdWorldClass] = useState<string>('')

  const startAnimation = (setClassName: (className: string) => void): void => {
    setTimeout(() => {
      setFirstWorldClass('active')
    }, 100)

    setTimeout(() => {
      setSecondWorldClass('active')
    }, 800)

    setTimeout(() => {
      setThirdWorldClass('active')
    }, 1500)

    setTimeout(() => {
      setPreLoaderClass('scrollDown')
      setClassName('active')

      sessionStorage.setItem('preLoaderExecuted', JSON.stringify(true))
    }, 3000)
  }

  useEffect(() => {
    const isPreLoaderExecuted = sessionStorage.getItem('preLoaderExecuted')
    const storagePreLoaderExecuted = isPreLoaderExecuted ? JSON.parse(isPreLoaderExecuted) : false
    setIsLoaderExecuted(storagePreLoaderExecuted)

    if (!storagePreLoaderExecuted) {
      startAnimation(setClassName)

      return
    }

    setClassName('active')
  }, [setClassName])

  if (isLoaderExecuted === null || isLoaderExecuted) {
    return null
  }

  return (
    <PreLoaderContainer className={preLoaderClass}>
      <SentencesWrapper className={cinzel.className}>
        <Sentence className={firstWorldClass}>WINE, </Sentence>
        <Sentence className={secondWorldClass}>PASSION, </Sentence>
        <Sentence className={thirdWorldClass}>TARCATION</Sentence>
      </SentencesWrapper>
    </PreLoaderContainer>
  )
}
