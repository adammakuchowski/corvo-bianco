import react from 'react'

export interface AlertContextValue {
  isAlertActive: boolean;
  setAlertActive: (value: boolean) => void;
  alertIcon?: any,
  setAlertIcon: (value: any) => void,
  alertOverflow?: string,
  setAlertOverflow: (value: string) => void,
}

const AlertContext = react.createContext<AlertContextValue>({
  isAlertActive: false,
  setAlertActive: (value: boolean) => {},
  alertIcon: undefined,
  setAlertIcon: (value: any) => {},
  alertOverflow: undefined,
  setAlertOverflow: (value: string) => {},
})

export default AlertContext
