import * as React from "react"
import Layout from "../components/Layout"

const Resume = () => {
  return (
    <Layout pageTitle="Resume">
      <article className="max-w-2xl mx-auto">
        <h2 className="font-bold mb-4 text-xl md:text-3xl md:mb-6">
          Educational Experience
        </h2>
        <div className="md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-6 md:text-lg">
          <div className="font-semibold">
            <h3>Chalmers University of Technology</h3>
            <p>M.Sc. in Computer Systems and Networks</p>
            <p>Sep 2020 - Now (Graduating June 2022)</p>
            <p>Gothenburg, Sweden</p>
          </div>
          <ul className="list-disc font-serif mt-2 ml-6 md:m-0">
            <li>
              Focused on distributes systems and computer security. Completed
              Chalmers{" "}
              <a href="https://www.cse.chalmers.se/edu/master/secspec/">
                Security Specialization.
              </a>
            </li>
            <li>
              Spent six months at Politecnico di Milano as an Erasmus exchange
              student.
            </li>
            <li>
              Currently writing my Masters Thesis on autonomous vehicle security
              at Einride.
            </li>
          </ul>
          <div className="font-semibold mt-4 md:m-0">
            <h3>Chalmers University of Technology</h3>
            <p>B.Sc. in Computer Science and Engineering</p>
            <p>Sep 2017 - June 2020</p>
            <p>Gothenburg, Sweden</p>
          </div>
          <ul className="list-disc font-serif mt-2 ml-6 md:m-0">
            <li>
              Degree focused on low level programming, computer hardware, maths
              and physics.
            </li>
            <li>
              Bachelor thesis &quot;End-to-end Encrypted Instant Messaging
              Application&quot; examined the{" "}
              <a href="https://signal.org/docs/">Signal Protocol</a> and
              implemented a MVP encrypted messaging program.
            </li>
          </ul>
        </div>
        <h2 className="font-bold mb-4 text-xl mt-6 md:text-3xl md:mb-6 md:mt-0">
          Work Experience
        </h2>
        <div className="md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-6 md:text-lg">
          <div className="font-semibold">
            <h3>Summer Intern</h3>
            <p>Einride</p>
            <p>Summer 2020</p>
            <p>Gothenburg, Sweden</p>
          </div>
          <ul className="list-disc font-serif mt-2 ml-6 md:m-0">
            <li>
              Part of the IT-Team with a focus on automation and security.
            </li>
            <li>
              I implemented automatic backups for all production databases.
            </li>
            <li>
              Was responsible for facilitating Einride&apos;s first penetration
              test and wrote security policies.
            </li>
          </ul>
          <div className="font-semibold  mt-4 md:m-0">
            <h3>Student Ambassador</h3>
            <p>Spotify</p>
            <p>Jan 2020 - June 2021</p>
            <p>Gothenburg, Sweden</p>
          </div>
          <ul className="list-disc font-serif mt-2 ml-6 md:m-0">
            <li>
              Part of the team responsible for Spotify&apos;s employer marketing
              and events aimed at students in Europe and Asia. The purpose was
              to establish Spotify as the most attractive employer for students.
            </li>
            <li>I was part of creating the student newsletter.</li>
            <li>
              Held multiple globally available events in cooperation with our US
              counterparts.
            </li>
          </ul>
          <div className="font-semibold  mt-4 md:m-0">
            <h3>Summer Intern</h3>
            <p>Infront Data</p>
            <p>Summer 2019</p>
            <p>Stockholm, Sweden</p>
          </div>
          <ul className="list-disc font-serif mt-2 ml-6 md:m-0">
            <li>
              Contact for stock analysts, helping our research team acquire
              information to create market consensuses for a wide range of
              companies
            </li>
            <li>
              Interacted with analysts from international investment- banks,
              such as UBS, Deutsche Bank, Credit Suisse, and Morgan Stanley.
            </li>
          </ul>
          <div className="font-semibold  mt-4 md:m-0">
            <h3>Project Manager</h3>
            <p>Chalmers Student Union Promotion</p>
            <p>May 2018 - May 2019</p>
            <p>Gothenburg, Sweden</p>
          </div>
          <ul className="list-disc font-serif mt-2 ml-6 md:m-0">
            <li>
              Cooperated with companies to facilitate student events on their
              behalf at Chalmers
            </li>
            <li>
              I was responsible for every part of the process, from first
              contact and planning to execution and follow-up.
            </li>
            <li>
              I carried out events for clients such as Tata Tata Consultancy
              Services, Implenia, and Vattenfall.
            </li>
          </ul>
        </div>
      </article>
    </Layout>
  )
}

export default Resume
