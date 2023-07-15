const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const isEmailValid = (value: string): boolean => EMAIL_REGEX.test(value) ? true : false

const STRING_REGEX = /^[a-zA-Z]+$/
export const isStringValid = (value: string): boolean => STRING_REGEX.test(value) ? true : false
