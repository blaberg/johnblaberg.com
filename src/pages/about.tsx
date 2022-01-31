import * as React from "react"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout pageTitle="About">
      <article className="max-w-2xl mx-auto">
        <h2 className="font-bold text-3xl mb-6">About</h2>
        <p className="font-serif text-xl">
          I&apos;m a student at Chalmers University of technology, studying for
          a M.Sc in Computer Science and Engineering with a focus on distributed
          systems and information security. This spring I will be writing my
          thesis at Einride, which will be focused on the internal network
          security of autonomous vehicles.
        </p>
      </article>
    </Layout>
  )
}

export default About
