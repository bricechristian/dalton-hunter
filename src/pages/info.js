import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import InfoForm from "../components/InfoForm"
import useSiteMetadata from "../static_queries/useSiteMetadata"

import infoStyles from "../styles/pages/info.module.scss"

export default function Info() {
  const { infoData } = useSiteMetadata()
  return (
    <Layout page="info" bgColor={'#1c1b1b'} pageUrl="https://charleston-home-travels.netlify.app/info">
      <SEO title="Info" description={infoData.description} pageUrl="https://charleston-home-travels.netlify.app/info" />
      <section className={infoStyles.info_wrap}>
        <div>
          <h1 className="text_3xl no_marg">{infoData.description}</h1>
        </div>
        <InfoForm />
      </section>
    </Layout>
  )
}