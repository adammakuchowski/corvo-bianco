import {Footer} from './Footer/Footer'
import {Navbar} from './Nabvar/Navbar'

interface LayoutProps {
  children: JSX.Element;
}

export const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar/>
        {children}
      <Footer/>
    </>
  )
}
