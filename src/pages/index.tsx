import { Link, graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="John Blåberg Kristoffersson">
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={node.slug}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        slug
      }
    }
  }
`

export default IndexPage
