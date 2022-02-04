import { graphql } from "gatsby"
import * as React from "react"
import LatestPost from "../components/LatestPost"
import Layout from "../components/Layout"
import PostEntry from "../components/PostEntry"

const IndexPage = ({ data }) => {
  const latest = data.allMdx.nodes[0]
  return (
    <Layout pageTitle="Home">
      <LatestPost node={latest} />
      <div className="flex flex-row flex-wrap justify-between md:mt-12">
        {data.allMdx.nodes.slice(1).map((node) => (
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
