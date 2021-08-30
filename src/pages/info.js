import React from "react"
import Layout from "../components/Layout"
import InfoForm from "../components/InfoForm"

import infoStyles from "../styles/pages/info.module.scss"

export default function Info() {
  return (
    <Layout page="info" bgColor={'#1c1b1b'}>
      <section className={infoStyles.info_wrap}>
        <div>
          <h1 className="text_3xl no_marg">Curious about finding your dream home in Charleston? Fill out this form and we'll direct you to an agent to assist you.</h1>
        </div>
        <InfoForm />
      </section>
    </Layout>
  )
}