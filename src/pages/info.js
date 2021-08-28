import React from "react"
import Layout from "../components/Layout"
import infoStyles from "../styles/pages/info.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function Info() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page="info" bgColor={'#1c1b1b'}>
      <section className={infoStyles.info_blurb}>
        <p>Insert form here...</p>
      </section>
    </Layout>
  )
}