import * as React from "react"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout pageTitle="About">
      <article className="max-w-2xl mx-auto">
        <h2 className="font-bold text-xl mb-6 md:text-3xl">About</h2>
        <div className="prose font-serif md:text-xl">
          <p>
            I&apos;m a student at Chalmers University of technology, studying
            for a M.Sc in Computer Science and Engineering with a focus on
            distributed systems and information security. This spring I will be
            writing my thesis at Einride, which will be focused on the internal
            network security of autonomous vehicles.
          </p>
          <p>
            I created this site mostly to facilitate my 2022 new years
            resolution - to create one project each month of the year. This
            website will be my public display, for good or bad. Orgiginally, I
            was only not going to write anything about the projects i made, but
            I got inspired to create a relate blog by posts like these{" "}
            <a href="https://sites.google.com/site/steveyegge2/you-should-write-blogs">
              1
            </a>{" "}
            , <a href="http://www.paulgraham.com/writing44.html">2</a>.
            Hopefully it will work out...
          </p>
        </div>
      </article>
    </Layout>
  )
}

export default About
