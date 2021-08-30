import React from "react"
import { Link } from "gatsby"
import useSiteMetadata from "../static_queries/useSiteMetadata"

import introStyles from "../styles/components/homeintro.module.scss"

export default function HomeIntro() {
  const { homeData } = useSiteMetadata()
  return (
    <div className={introStyles.intro_card}>
        <h2 className="text_4xl">{homeData.headline}</h2>
        <Link to="/info" className="arrow_link">Learn More</Link>
    </div>
  )
}