import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ModesProvider } from '../contexts/ModesContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ModesProvider>
    <Component  {...pageProps} />
  </ModesProvider>
    
  )
}
