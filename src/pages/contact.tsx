import * as React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <h2 className="font-bold text-3xl mb-6">Contact</h2>
      <ul>
        <li>
          <a href="mailto:john.kristoffersson@gmail.com" className="text-black">
            john.kirtosffersson@Gmail.com
          </a>
        </li>
        <li>
          <a href="tel:+46709308018" className="text-black">
            +46 (0)70 930 80 18
          </a>
        </li>
        <li>
          <a href="https://github.com/blaberg" className="text-black">
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/john-kristoffersson/"
            className="text-black"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default Contact
