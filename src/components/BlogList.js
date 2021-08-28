import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import blogListStyles from "../styles/components/bloglist.module.scss"
import Img from 'gatsby-image'

export default function BlogList() {
  const blogData = useBlogData()
  function renderBlogData() {
    return (
      <>
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            return (
              <Link to={`/blog/${blog.node.fields.slug}`} key={blog.node.id} className={blogListStyles.card_wrap}>
                <div className={blogListStyles.card} key={blog.node.fields.slug}>
                  <div className={blogListStyles.card_hero}>
                    <Img 
                      fluid={
                        blog.node.frontmatter.hero_image.childImageSharp.fluid
                      }
                      alt={blog.node.frontmatter.title}
                    />
                  </div>
                  <div className={blogListStyles.list__info}>
                    <h2 className="chapaza-italic">{blog.node.frontmatter.title}</h2>
                    <h3 className="caps">{blog.node.frontmatter.date}</h3>
                    <p>{blog.node.excerpt}</p>
                  </div>
                </div>
              </Link>
            )
          })}
      </>
    )
  }
  return (
      <>{renderBlogData()}</>
  )
}

