import React from "react"
import { Link } from "gatsby"
import introStyles from "../styles/components/homeintro.module.scss"

export default function HomeIntro() {
  return (
    <div className={introStyles.intro_card}>
        <h2 className="text_4xl">Exploring all that Charleston has to offer while navigating the Lowcountry real-estate housing market.</h2>
        <Link to="/info" className="arrow_link">Learn More</Link>
    </div>
  )
}