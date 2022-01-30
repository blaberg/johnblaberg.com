import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import PostEntry from "../components/PostEntry"

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home">
      <div className="flex flex-row flex-wrap">
        {data.allMdx.nodes.map((node) => (
          <PostEntry key={node.id} node={node} />
        ))}
      </div>
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
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`

export default IndexPage
