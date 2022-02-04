import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as React from "react"
import Layout from "../components/Layout"

const PostTemplate = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <article className="max-w-2xl mx-auto">
        <h1 className="text-xl font-bold lg:text-4xl">
          {data.mdx.frontmatter.title}
        </h1>
        <p className="text-gray-700 font-thin text-sm mt-0.5">
          {data.mdx.frontmatter.date}
        </p>
        <div className="prose mt-8 font-serif lg:mt-12 lg:text-xl">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default PostTemplate
