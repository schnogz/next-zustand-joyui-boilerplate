import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactElement, ReactNode } from 'react'

import Theme from '@/styles/theme'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  const queryClient = new QueryClient()

  return (
    <>
      <Head>
        <title>next-zustand-joyui-boilerplate</title>
      </Head>
      <Theme options={{ key: 'joy' }}>
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}
        </QueryClientProvider>
      </Theme>
    </>
  )
}
