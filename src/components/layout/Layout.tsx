import {Footer} from './footer/Footer'
import {Navbar} from './nabvar/Navbar'

interface LayoutProps {
  children: JSX.Element;
}

export const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}
