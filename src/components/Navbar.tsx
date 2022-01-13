import { Link } from "gatsby"
import * as React from "react"

const Navbar = () => {
  return (
    <nav className="w-full flex flex-row justify-between py-6">
      <div className="flex flex-row">
        <Link className="text-3xl w-1/2 font-bold" to="/">
          John Blåberg Kristoffersson
        </Link>
      </div>
      <div className="w-1/3 flex flex-row justify-between">
        <Link className="m-auto text-xl" to="/about">
          About
        </Link>
        <Link className="m-auto text-xl" to="/resume">
          Resume
        </Link>
        <Link className="m-auto text-xl" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
