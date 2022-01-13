import * as React from "react"
import Navbar from "./Navbar"

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle} · John Blåberg Kristoffersson</title>
      <div className="w-1/2 mx-auto">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
