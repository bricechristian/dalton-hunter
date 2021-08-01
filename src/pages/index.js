import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import SEO from "../components/Seo"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit">
      <SEO pathname="home" />
      <section>
        <BlogList />
      </section>
    </Layout>
  )
}