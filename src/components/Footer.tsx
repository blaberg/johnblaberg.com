import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const Footer = () => {
  return (
    <footer className="pt-16 h-20 md:h-32 md:pt-20">
      <div className="w-14 flex flex-row justify-between">
        <a href="https://github.com/blaberg">
          <StaticImage
            className="w-6 h-6"
            src="../images/github-logo.png"
            alt="Github Logo"
          />
        </a>
        <Link to="/rss.xml">
          <StaticImage
            className="w-6 h-6"
            src="../images/rss.png"
            alt="RSS Logo"
          />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
