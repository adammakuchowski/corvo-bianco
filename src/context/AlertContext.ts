import react from 'react'

export interface AlertContextValue {
  isAlertActive: boolean;
  setAlertActive: (value: boolean) => void;
}

const AlertContext = react.createContext<AlertContextValue>({
  isAlertActive: false,
  setAlertActive: (value: boolean) => {}
})

export default AlertContext
