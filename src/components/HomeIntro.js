import React from "react"
import { Link } from "gatsby"
import introStyles from "../styles/components/homeintro.module.scss"

export default function HomeIntro() {
  return (
    <div className={introStyles.intro_card}>
        <h2 className="text_4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <Link to={`#`} className="arrow_link">Hello World.</Link>
    </div>
  )
}