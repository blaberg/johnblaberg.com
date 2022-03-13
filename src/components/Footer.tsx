import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const Footer = () => {
  return (
    <footer className="pt-16 h-20 md:h-32 md:pt-20">
      <a href="https://github.com/blaberg">
        <StaticImage
          className="w-6 h-6"
          src="../images/GitHub-Mark-64px.png"
          alt="Github Logo"
        />
      </a>
    </footer>
  )
}

export default Footer
