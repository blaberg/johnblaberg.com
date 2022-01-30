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
      <div className="max-w-4xl mx-auto pb-32">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
