import * as React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <article className="max-w-2xl mx-auto">
        <h2 className="font-bold text-xl mb-6 md:text-3xl ">Contact</h2>
        <h3 className=" font-Archivo md:text-xl">
          I would like to get in contact with you, how can I do that?
        </h3>
        <p className="mt-1">
          The easiest way is to send me an email at{" "}
          <a href="mailto:john.kristoffersson@gmail.com">
            john.kristoffersson@gmail.com
          </a>
          . If you are a bit talkative or simply in a rush you can call me at{" "}
          <a href="tel:+46709308018">+46(0)709308018</a>.
        </p>
        <h3 className="font-Archivo mt-4 md:text-xl">
          Do you have any projects to show off?
        </h3>
        <p className="mt-1">
          All my projects can be found on my{" "}
          <a href="https://github.com/blaberg">GitHub</a>. This includes the
          project I make for this blog, as well as the code for the blog itself.
        </p>
        <h3 className="font-Archivo mt-4 md:text-xl">
          Do you have any social media?
        </h3>
        <p className="mt-1">
          I have a very flashy{" "}
          <a href="https://www.linkedin.com/in/john-kristoffersson/">
            LinkedIn
          </a>{" "}
          profile!
        </p>
      </article>
    </Layout>
  )
}

export default Contact
