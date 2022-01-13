import { Link, graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import PostEntry from "../components/PostEntry"

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home">
      {data.allMdx.nodes.map((node) => (
        <PostEntry key={node.id} node={node} />
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
          description
        }
        id
        slug
      }
    }
  }
`

export default IndexPage
