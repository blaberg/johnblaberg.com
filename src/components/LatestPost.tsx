import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"

const LatestPost = ({ node }) => {
  const image = getImage(node.frontmatter.hero_image)

  return (
    <article>
      <Link
        className="flex flex-col lg:flex-row hover:no-underline"
        to={node.slug}
      >
        <GatsbyImage
          image={image}
          alt={node.frontmatter.hero_image_alt}
          className="h-40 rounded md:h-64 lg:h-80 lg:w-3/5"
        />
        <div className="lg:w-2/5 lg:pl-4">
          <p className="text-gray-700 font-thin text-sm mt-0.5">
            {node.frontmatter.date}
          </p>
          <h2 className="text-xl font-Archivo text-black  mt-1 hover:underline md:text-4xl">
            {node.frontmatter.title}
          </h2>
          <p className="text-sm mt-1 text-gray-800 md:text-lg">
            {node.frontmatter.description}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default LatestPost
