import React from 'react'
import { AppProps } from 'next/app'
import getSiteLayout from 'layouts/core/DefaultLayout'
import Head from 'next/head'
import '@nexys/global.scss'
import useNProgress from '@nexys/hooks/useNProgress/useNProgress'
import useRefreshStyle from '@nexys/hooks/useRefreshStyle/useRefreshStyle'
// import useLoadingPage from 'hooks/useLoadingPage/useLoadingPage'

const title = 'Kukuh Budiarto'
const description = 'Perumahan Grand Ashoka'
const metaURL = 'https://github.com/chornos13'
// const webIconURL = '/static/favicon.ico'

function App(props: AppProps) {
  useNProgress()
  useRefreshStyle()
  // const loading = useLoadingPage()
  const siteLayout = getSiteLayout(props)
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        {/* <link rel="shortcut icon" href={webIconURL} /> */}
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaURL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metaURL} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        {/* <script type="application/ld+json"> */}
        {/*  {JSON.stringify(schemaORG)} */}
        {/* </script> */}
      </Head>
      {/* {loading} */}
      {siteLayout}
    </React.Fragment>
  )
}

export default App
