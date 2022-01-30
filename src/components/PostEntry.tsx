import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"

const PostEntry = ({ node }) => {
  const image = getImage(node.frontmatter.hero_image)

  return (
    <article className="w-72">
      <Link className="text-black hover:no-underline" to={node.slug}>
        <GatsbyImage
          image={image}
          alt={node.frontmatter.hero_image_alt}
          className="w-full h-40 rounded"
        />
        <p className="text-gray-700 font-thin text-sm mt-0.5">
          {node.frontmatter.date}
        </p>
        <h2 className="text-2xl hover:underline font-Archivo mt-1">
          {node.frontmatter.title}
        </h2>
        <p className="text-lg mt-1 text-sm text-gray-800">
          {node.frontmatter.description}
        </p>
      </Link>
    </article>
  )
}

export default PostEntry
