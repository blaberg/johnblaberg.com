import * as React from "react"
import { Helmet } from "react-helmet"
import Navbar from "./Navbar"

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <title>{pageTitle} · John Blåberg Kristoffersson</title>
      </Helmet>
      <div className="w-screen lg:max-w-4xl mx-auto px-8 pb-20 lg:pb-32 lg:px-0">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
