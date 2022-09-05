import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/shared/Layout'
import { ActivePanelProvider } from '../context/ActivePanelContext'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ActivePanelProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ActivePanelProvider>
  )
}

export default MyApp
