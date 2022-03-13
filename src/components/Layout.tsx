import * as React from "react"
import { Helmet } from "react-helmet"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <title>{pageTitle} · John Blåberg Kristoffersson</title>
      </Helmet>
      <div className="w-screen max-w-2xl min-h-screen flex flex-col justify-between lg:max-w-4xl mx-auto px-8 lg:px-0">
        <Navbar />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
