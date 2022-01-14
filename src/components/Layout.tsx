import * as React from "react"
import { Helmet } from "react-helmet"
import Navbar from "./Navbar"

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <title>{pageTitle} · John Blåberg Kristoffersson</title>
        <link rel="canonical" href="https://johnblaberg.com" />
      </Helmet>

      <div className="max-w-2xl mx-auto">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
