import { Link } from "gatsby"
import * as React from "react"

const Navbar = () => {
  return (
    <nav className="w-full flex flex-row justify-between pt-8 pb-20">
      <div className="flex flex-row">
        <Link
          className="text-3xl font-Archivo text-black hover:no-underline"
          to="/"
        >
          John Kristoffersson
        </Link>
      </div>
      <div className="w-1/3 flex flex-row justify-between">
        <Link className="m-auto text-xl text-black" to="/about">
          About
        </Link>
        <Link className="m-auto text-xl text-black" to="/resume">
          Resume
        </Link>
        <Link className="m-auto text-xl text-black" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
