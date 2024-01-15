import type {AppProps} from 'next/app'
import {Provider} from 'react-redux'

import '@/styles/globals.css'
import store from '@/app/store'

export default function App ({Component, pageProps}: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
