import {formActionTypes} from './constants'
import {FromState} from './types'

export const formRecuder = (fromState: FromState, action: {type: string, value: any, key: string}) => {
  const {type, value, key} = action
  
  if (formActionTypes.includes(type)) {
    return {...fromState, [key]: value}
  }
  
  return {...fromState}
}
