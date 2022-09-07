import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/shared/Layout'
import { PanelProvider } from '../context/PanelContext'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PanelProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PanelProvider>
  )
}

export default MyApp
