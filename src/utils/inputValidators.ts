const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const isEmailValid = (value: string): boolean => EMAIL_REGEX.test(value) ? true : false

const STRING_REGEX = /^[a-zA-Z]+$/
export const isStringValid = (value: string): boolean => STRING_REGEX.test(value) ? true : false

export const inEmptyString = (value: string): boolean => !value

const CARD_NUMBER_REGEX = /^\d{16}$/
export const isCardNumberValid = (value: string): boolean =>  CARD_NUMBER_REGEX.test(value) ? false : true

const CARD_DATE_REGEX = /^(0[1-9]|1[0-2])\/\d{2}$/
