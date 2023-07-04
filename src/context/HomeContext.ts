import react from 'react'

export interface HomeContextValue {
  className: string;
}

const HomeContext = react.createContext<HomeContextValue>({
  className: '',
})

export default HomeContext
