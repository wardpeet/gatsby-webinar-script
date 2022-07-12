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
        src={`https://www.googletagmanager.com/gtag/js?id=G-4ZNFCG40SL`}
        strategy="off-main-thread"
        forward={[`gtag`]}
      />
      <Script id="gtag-config" strategy="off-main-thread">
        {`
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() { window.dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', "G-4ZNFCG40SL", { send_page_view: false })
  `}
      </Script>
    </>
  )
}

export default Layout
