import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"

const LatestPost = ({ node }) => {
  const image = getImage(node.frontmatter.hero_image)

  return (
    <article>
      <Link className="flex flex-row hover:no-underline" to={node.slug}>
        <GatsbyImage
          image={image}
          alt={node.frontmatter.hero_image_alt}
          className="w-3/5 h-80 rounded"
        />
        <div className="w-2/5 pl-4">
          <p className="text-gray-700 font-thin text-sm mt-0.5">
            {node.frontmatter.date}
          </p>
          <h2 className="text-4xl hover:underline font-Archivo text-black hover:underline mt-1">
            {node.frontmatter.title}
          </h2>
          <p className="text-lg mt-1 text-xl text-gray-800">
            {node.frontmatter.description}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default LatestPost
