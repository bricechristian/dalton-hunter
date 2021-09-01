import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, image: metaImage, title, pathname, pageUrl }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const image =
    metaImage
      ? metaImage
      : '/dalton-og.jpg'
  const url = (pathname && pathname !== 'home') ? `https://charleston-home-travels.netlify.app/` : pageUrl
  const canonical = (pathname && pathname !== 'home') ? `https://charleston-home-travels.netlify.app/${pathname}` : null
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title ? title : site.siteMetadata.title}
      titleTemplate={pathname === 'home' ? null : `%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: url,
        },        
        {
          name: `twitter:creator`,
          content: 'Dalton Hunter',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          [
            {
              property: "og:image",
              content: image,
            },
            {
              property: "og:image:width",
              content: '1200',
            },
            {
              property: "og:image:height",
              content: '630',
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:card",
              content: "summary",
            }
          ]
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}

export default SEO