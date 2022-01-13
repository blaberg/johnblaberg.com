import { Link } from "gatsby"
import * as React from "react"

const PostEntry = ({ node }) => {
  return (
    <article>
      <h2 className="text-4xl font-bold">
        <Link to={node.slug}>{node.frontmatter.title}</Link>
      </h2>
      <p className="text-gray-700">{node.frontmatter.date}</p>
      <p className="text-lg font-serif mt-2">{node.frontmatter.description}</p>
    </article>
  )
}

export default PostEntry
