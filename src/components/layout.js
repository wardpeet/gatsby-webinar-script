import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import Head from "./head"
import "../styles.css"
import { Script } from "gatsby"

const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <Header />
      {props.children}
      <Footer />

      <Script
        src={`https://www.googletagmanager.com/gtm.js?id=GTM-KHPM8DC`}
        strategy="post-hydrate"
        forward={[`dataLayer.push`]}
      />
      <Script id="gtm-init" strategy="post-hydrate">{`
window.dataLayer = window.dataLayer || []
window.dataLayer.push({ 'gtm.start': new Date().getTime(), 'event': 'gtm.js' })
`}</Script>
    </>
  )
}

export default Layout
