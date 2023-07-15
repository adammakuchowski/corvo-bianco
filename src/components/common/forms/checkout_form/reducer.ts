import {SET_EMAIL, SET_EMAIL_ERROR} from './constants'
import {FromState} from './types'

export const formRecuder = (fromState: FromState, action: {type: string, value: any}) => {
  const {type, value} = action
  
  if (type === SET_EMAIL) {
    return {...fromState, email: value}
  }
  
  if (type === SET_EMAIL_ERROR) {
    return {...fromState, emailError: value}
  }

  return {...fromState}
}
