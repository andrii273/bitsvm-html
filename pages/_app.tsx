import '@/assets/css/bootstrap.min.css'
import '@/assets/css/style.css'
import '@/assets/css/swiper.css'
import '@/assets/css/style.css'
import '@/assets/css/coloring.css'
import '@/assets/css/colors/scheme-01.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/common/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
