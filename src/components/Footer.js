import React from "react"
import footerStyles from "../styles/components/footer.module.scss"

export default function Footer() {
  return (
    <div className={footerStyles.footer}>
       <p className="chapaza line_height_1 no_marg">Charleston<span className="chapaza-italic">Home</span>Travels © {new Date().getFullYear()}</p>
    </div>
  )
}