import react from 'react'

const AlertContext = react.createContext({
  isAlertActive: false,
  setAlertActive: (value: boolean) => {}
})

export default AlertContext
