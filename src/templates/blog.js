import React from "react"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import SEO from "../components/Seo"
import { graphql, Link } from "gatsby"
import useBlogData from '../static_queries/useBlogData'
import blogTemplateStyles from "../styles/templates/blog.module.scss"
//this component handles the blur img & fade-ins
import Img from 'gatsby-image'


export default function Blog(props) {
  const data = props.data.markdownRemark
  const allBlogData = useBlogData()
  const nextSlug = getNextSlug(data.fields.slug)
  let nextTitle;
  getNextTitle();
  function getNextTitle(){
    const blogItem = allBlogData.filter(item => {
      return item.node.fields.slug === nextSlug
    })
    nextTitle = blogItem[0].node.frontmatter.title
  }
  function getNextSlug(slug) {
    const allSlugs = allBlogData.map(blog => {
      return blog.node.fields.slug
    })
    const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]
    if(nextSlug !== undefined && nextSlug !== '') {
      return nextSlug
    } else {
      return allSlugs[0]
    }
  }

  return (
    <Layout>
      <SEO title={`${data.frontmatter.title} | Blog`} description={data.excerpt} image={`https://charleston-home-travels.netlify.app${data.frontmatter.hero_image.childImageSharp.fixed.src}`} pageUrl={`https://charleston-home-travels.netlify.app/blog/${data.fields.slug}`} />
      <article className={blogTemplateStyles.blog}>
        <figure className={blogTemplateStyles.blog__hero}>
          <Img
            fluid={data.frontmatter.hero_image.childImageSharp.fluid}
            alt={data.frontmatter.title}
          />
        </figure>
        <div className={blogTemplateStyles.blog__info}>
          <h1 className="text_4xl">{data.frontmatter.title}</h1>
          <h3 className="caps">{data.frontmatter.date}</h3>
        </div>
        <div
          className={blogTemplateStyles.blog__body}
          dangerouslySetInnerHTML={{ __html: data.html }}
        ></div>
        <div className={blogTemplateStyles.blog__footer}>
          <Link to={`/blog/${nextSlug}`} className="arrow_link">{nextTitle}</Link>
        </div>
      </article>
      <Footer />
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        hero_image {
          childImageSharp {
            fixed {
                src
            }
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt
      html
    }
  }
`
