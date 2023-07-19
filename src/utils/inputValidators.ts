const regexValid = (regex: RegExp, value: string) => regex.test(value) ? true : false

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const isEmailValid = (value: string): boolean => regexValid(EMAIL_REGEX, value)

const STRING_REGEX = /^[a-zA-Z]+$/
export const isStringValid = (value: string): boolean => regexValid(STRING_REGEX, value)

const CARD_NUMBER_REGEX = /^\d{16}$/
export const isCardNumberValid = (value: string): boolean => regexValid(CARD_NUMBER_REGEX, value)

const CARD_DATE_REGEX = /^(0[1-9]|1[0-2])\/\d{2}$/
export const isCardDateValid = (value: string): boolean => regexValid(CARD_DATE_REGEX, value)

const CARD_CVC_REGEX = /^\d{3}$/
export const isCardCvcValid = (value: string): boolean => regexValid(CARD_CVC_REGEX, value)

export const inEmptyString = (value: string): boolean => !value
